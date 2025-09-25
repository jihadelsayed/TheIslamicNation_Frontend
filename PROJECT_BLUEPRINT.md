# TheIslamicNation — Firebase Studio Blueprint

**App Name:** TheIslamicNation  
**Owner:** Neetechs  
**Frontend:** Angular 20 (SSR via Vite) → Firebase Hosting + Cloud Functions (SSR handler)  
**Backend:** Firebase (Auth, Firestore, Storage, Functions, FCM, Remote Config, App Check)  
**Locales:** `en`, `ar` (RTL)  
**Environments:** `dev`, `prod`

---

## 1) Core Goals
- Global Islamic community hub: identity, knowledge, tools, events, giving.
- Fast, SEO-friendly SSR.
- Clear separation of public vs. verified/scholar/admin areas.
- Scalable Firestore model with strict security and auditable actions.

---

## 2) MVP Feature Scope
1. **Auth & Profiles**
   - Email/Password, Phone OTP, Google, Apple.
   - Optional Web3 address link (no custody; store `ethAddress`).
   - Roles: `member`, `scholar`, `moderator`, `admin` (via custom claims).
   - Profile: name, avatar, bio, languages, location (country/city), badges.

2. **Knowledge**
   - Articles with references (Quran/Hadith IDs), tags, review status.
   - Q&A: user questions, scholar answers, community upvotes, AI summary (stored).

3. **Community**
   - Groups (e.g., masjid, study circle) with posts and events.
   - Comments, reactions, basic moderation.

4. **Tools**
   - Prayer times (geo-aware; cached), Qibla finder.
   - Zakat calculator (madhhab-aware), Hijri calendar.
   - Halal locator (community-verified).

5. **Donations**
   - Donation intents + external payment reference (Stripe/PayPal placeholder).

6. **Admin & Audit**
   - Role management, content moderation queue, audit logs.

---

## 3) Firestore Data Model (Collections & Docs)

```text
users/{uid}
  - displayName: string
  - email: string
  - phoneNumber: string | null
  - photoURL: string | null
  - ethAddress: string | null
  - languages: string[]           # e.g., ["en","ar"]
  - country: string | null
  - city: string | null
  - badges: string[]              # e.g., ["founder","contributor"]
  - createdAt: timestamp
  - updatedAt: timestamp
  - onboarding: { completed: boolean, steps: string[] }

roles/{uid}
  - roles: { member: boolean, scholar: boolean, moderator: boolean, admin: boolean }
  - grantedBy: uid
  - grantedAt: timestamp

articles/{articleId}
  - title: string
  - slug: string
  - lang: "en" | "ar"
  - status: "draft" | "review" | "published" | "archived"
  - tags: string[]
  - references: { quranAyat: string[], hadithIds: string[] }
  - createdBy: uid
  - createdAt: timestamp
  - updatedAt: timestamp
  - publishedAt: timestamp | null
  - latestVersion: number
  subcollections:
    versions/{versionId}
      - version: number
      - bodyMarkdown: string
      - changeNote: string
      - updatedBy: uid
      - updatedAt: timestamp
    votes/{uid}
      - value: 1 | -1

questions/{questionId}
  - title: string
  - body: string
  - lang: "en" | "ar"
  - askedBy: uid
  - tags: string[]
  - status: "open" | "answered" | "closed"
  - createdAt: timestamp
  - updatedAt: timestamp
  - aiSummary: string | null
  subcollections:
    answers/{answerId}
      - body: string
      - answeredBy: uid       # typically scholar
      - createdAt: timestamp
      - updatedAt: timestamp
      - accepted: boolean
      - votes: number
    votes/{uid}
      - value: 1 | -1

groups/{groupId}
  - name: string
  - slug: string
  - type: "masjid" | "study" | "org" | "general"
  - country: string | null
  - city: string | null
  - ownerId: uid
  - createdAt: timestamp
  - visibility: "public" | "private" | "hidden"
  subcollections:
    members/{uid}
      - role: "owner" | "admin" | "member"
      - joinedAt: timestamp
    posts/{postId}
      - body: string
      - attachments: string[]  # storage paths
      - createdBy: uid
      - createdAt: timestamp
      - editedAt: timestamp | null
    events/{eventId}
      - title: string
      - startsAt: timestamp
      - endsAt: timestamp
      - timezone: string
      - location: { name: string, lat: number, lng: number } | null
      - description: string

comments/{commentId}
  - parentType: "article" | "post" | "answer"
  - parentId: string
  - body: string
  - createdBy: uid
  - createdAt: timestamp
  - editedAt: timestamp | null

tools/prayerCache/{geoHash}
  - dateISO: string           # YYYY-MM-DD
  - calcMethod: string
  - times: { fajr: string, sunrise: string, dhuhr: string, asr: string, maghrib: string, isha: string }
  - createdAt: timestamp

tools/zakatRates/{year}
  - goldPricePerGramUSD: number
  - nisabGoldGrams: number
  - notes: string
  - updatedAt: timestamp

halalPlaces/{placeId}
  - name: string
  - address: string
  - lat: number
  - lng: number
  - phone: string | null
  - website: string | null
  - verified: boolean
  - submittedBy: uid
  - createdAt: timestamp
  - updatedAt: timestamp

donations/{donationId}
  - userId: uid | null
  - amount: number
  - currency: "USD" | "EUR" | "SAR" | ...
  - cause: string             # e.g., "Education", "Zakat", "Sadaqah"
  - status: "initiated" | "succeeded" | "failed"
  - externalProvider: "stripe" | "paypal" | "manual"
  - externalPaymentRef: string | null
  - createdAt: timestamp
  - updatedAt: timestamp

notifications/{notifId}
  - userId: uid
  - type: "system" | "group" | "qa" | "article"
  - title: string
  - body: string
  - link: string | null
  - read: boolean
  - createdAt: timestamp

auditLogs/{logId}
  - actorId: uid | "system"
  - action: string              # e.g., "ARTICLE_PUBLISH", "ROLE_GRANT"
  - target: { type: string, id: string }
  - meta: map
  - createdAt: timestamp
```
---

## 4) Storage (Buckets & Paths)
```text
/avatars/{uid}/{filename}
/articles/{articleId}/{assetName}
/groups/{groupId}/posts/{postId}/{assetName}
/media/videos/{uuid}.mp4
/media/podcasts/{uuid}.mp3
```
- Enforce size/type with Security Rules.
- Generate thumbnails via Functions if needed.

---

## 5) Firebase Security Rules (High-Level Outline)

```js
// firestore.rules (outline)
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    function isSignedIn() { return request.auth != null; }
    function isAdmin() { return isSignedIn() && request.auth.token.admin == true; }
    function hasRole(role) { return isSignedIn() && role in request.auth.token && request.auth.token[role] == true; }

    // users — self readable/writable (limited fields), admins can manage
    match /users/{uid} {
      allow read: if isSignedIn() && (uid == request.auth.uid || isAdmin());
      allow update: if isSignedIn() && uid == request.auth.uid;
      allow create: if isSignedIn() && uid == request.auth.uid;
      allow delete: if false; // users are soft-deleted via admin
    }

    // roles — admin-only
    match /roles/{uid} {
      allow read: if isAdmin();
      allow write: if isAdmin();
    }

    // articles — public read for published; draft/review limited
    match /articles/{id} {
      allow read: if resource.data.status == "published" || isAdmin() || hasRole("scholar") || hasRole("moderator");
      allow create: if hasRole("scholar") || isAdmin();
      allow update: if isAdmin() || hasRole("scholar");
      allow delete: if isAdmin();

      match /versions/{versionId} {
        allow read: if exists(/databases/$(database)/documents/articles/$(id)) && (
          get(/databases/$(database)/documents/articles/$(id)).data.status == "published" ||
          isAdmin() || hasRole("scholar") || hasRole("moderator")
        );
        allow write: if isAdmin() || hasRole("scholar");
      }

      match /votes/{uid} {
        allow read: if true;
        allow write: if isSignedIn() && request.auth.uid == uid;
      }
    }

    // questions & answers — mostly public read, write requires auth
    match /questions/{qid} {
      allow read: if true;
      allow create: if isSignedIn();
      allow update, delete: if isAdmin() || (isSignedIn() && request.auth.uid == resource.data.askedBy);

      match /answers/{aid} {
        allow read: if true;
        allow create: if hasRole("scholar") || isAdmin();
        allow update, delete: if isAdmin() || (hasRole("scholar") && request.auth.uid == resource.data.answeredBy);
      }
      match /votes/{uid} {
        allow read: if true;
        allow write: if isSignedIn() && request.auth.uid == uid;
      }
    }

    // groups
    match /groups/{gid} {
      allow read: if resource.data.visibility == "public" || isAdmin() || isSignedIn();
      allow create: if isSignedIn();
      allow update, delete: if isAdmin() || (isSignedIn() && get(/databases/$(database)/documents/groups/$(gid)).data.ownerId == request.auth.uid);

      match /members/{uid} {
        allow read: if isSignedIn();
        allow write: if isAdmin() || request.auth.uid == uid; // joining/leaving
      }

      match /posts/{pid} {
        allow read: if true;
        allow create: if isSignedIn();
        allow update, delete: if isAdmin() || (isSignedIn() && request.auth.uid == resource.data.createdBy);
      }

      match /events/{eid} {
        allow read: if true;
        allow write: if isAdmin() || hasRole("moderator") || (isSignedIn() && get(/databases/$(database)/documents/groups/$(gid)).data.ownerId == request.auth.uid);
      }
    }

    // comments — auth required for write
    match /comments/{cid} {
      allow read: if true;
      allow create: if isSignedIn();
      allow update, delete: if isAdmin() || (isSignedIn() && request.auth.uid == resource.data.createdBy);
    }

    // tools, halalPlaces, donations, notifications, auditLogs
    match /tools/{doc=**} { allow read: if true; allow write: if isAdmin(); }
    match /halalPlaces/{id} {
      allow read: if true;
      allow create: if isSignedIn();
      allow update, delete: if isAdmin() || (isSignedIn() && request.auth.uid == resource.data.submittedBy);
    }
    match /donations/{id} {
      allow read: if isAdmin() || (isSignedIn() && request.auth.uid == resource.data.userId);
      allow create: if true; // allow anonymous intents
      allow update: if isAdmin() || (isSignedIn() && request.auth.uid == resource.data.userId);
      allow delete: if isAdmin();
    }
    match /notifications/{id} {
      allow read: if isSignedIn() && request.auth.uid == resource.data.userId;
      allow write: if isAdmin() || (isSignedIn() && request.auth.uid == resource.data.userId);
    }
    match /auditLogs/{id} { allow read, write: if isAdmin(); }
  }
}
```

```js
// storage.rules (outline)
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    function isSignedIn() { return request.auth != null; }
    function isAdmin() { return isSignedIn() && request.auth.token.admin == true; }

    match /avatars/{uid}/{file} {
      allow read: if true;
      allow write: if isSignedIn() && request.auth.uid == uid;
    }

    match /articles/{articleId}/{assetName} {
      allow read: if true;
      allow write: if isAdmin();
    }

    match /groups/{groupId}/posts/{postId}/{assetName} {
      allow read: if true;
      allow write: if isSignedIn();
    }

    match /media/{type}/{file} {
      allow read: if true;
      allow write: if isAdmin();
    }
  }
}
```

---

## 6) Cloud Functions (Outline)

```ts
// auth.onCreate -> create user doc, default role=member
// https callable: setUserRoles(admin only)
// https callable: submitQuestion (rate-limited)
// https callable: answerQuestion (scholar/admin)
// https callable: generateAISummary(questionId) (admin/scholar; uses external LLM)
// scheduled: refreshPrayerCache (daily by region)
// firestore triggers:
//   - onArticlePublish -> notify subscribers
//   - onGroupPostCreate -> notify group members
```

Rate limiting: use Firebase App Check + callable functions + per-user counters in RTDB/Firestore.

---

## 7) FCM (Cloud Messaging)
- Topics: `global`, `news`, `ramadan`, `group-{groupId}`, `articles`.
- User prefs in `users/{uid}.notificationPrefs`:
```json
{
  "news": true,
  "articles": true,
  "groups": ["group-123", "group-xyz"]
}
```

---

## 8) Remote Config (Flags)
- `features.prayerTimes` (bool)
- `features.qibla` (bool)
- `features.zakat` (bool)
- `features.qa` (bool)
- `features.groups` (bool)
- `ui.defaultLang` = "en"
- `ui.enableRTL` = true

---

## 9) App Check
- Enforce on Firestore/Functions/Storage.
- Register Android, iOS, Web reCAPTCHA Enterprise.

---

## 10) Environments
- `dev` projectId: `theislamicnation-dev`
- `prod` projectId: `theislamicnation`
- Separate Firestore/Storage buckets; separate Remote Config & RC templates.

---

## 11) Hosting & SSR
- Angular SSR served via Cloud Functions or Cloud Run (function default here).
- `hosting` rewrites:
```json
[
  { "source": "/api/**", "function": "api" },
  { "source": "**", "function": "ssr" }
]
```

---

## 12) Basic Indexes (Firestore Composite)
- `articles(status asc, publishedAt desc)`
- `questions(status asc, createdAt desc)`
- `groups(city asc, createdAt desc)`
- `comments(parentType asc, parentId asc, createdAt desc)`
- `halalPlaces(city asc, verified desc)`

---

## 13) Analytics (Event Names)
- `login`, `signup_method`, `article_view`, `article_share`, `question_ask`,
  `answer_submit`, `group_join`, `post_create`, `donation_start`, `donation_success`,
  `tool_prayer_open`, `tool_zakat_calc`, `qibla_use`.

---

## 14) i18n Seed (Keys)
```json
{
  "nav": { "home": "Home", "knowledge": "Knowledge", "community": "Community", "tools": "Tools", "donate": "Donate" },
  "auth": { "login": "Login", "signup": "Sign Up", "logout": "Logout" },
  "tools": { "prayer_times": "Prayer Times", "qibla": "Qibla", "zakat": "Zakat Calculator" }
}
```
Provide Arabic equivalents in `/i18n/ar.json` and enable RTL.

---

## 15) CI/CD (Outline)
- GitHub Actions:
  - Lint, test, build Angular
  - Deploy to `dev` on push to `develop`
  - Manual approve → deploy to `prod` (protected)
- `firebase.json` & `firebaserc` with `dev`/`prod` targets.

---

## 16) Admin Playbook (Minimal)
- Grant roles via callable `setUserRoles` (admin only).
- Content lifecycle: draft → review (scholar/moderator) → publish.
- Incident log in `auditLogs`.
