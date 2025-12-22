# Configuration Deep Linking

## Fichiers nécessaires pour le deep linking

### 1. apple-app-site-association (iOS Universal Links)

**Action requise :** Remplacez `TEAM_ID` par votre Apple Team ID.

Pour trouver votre Team ID :
1. Connectez-vous à https://developer.apple.com/account
2. Allez dans "Membership"
3. Copiez votre Team ID (format : XXXXXXXXXX)

Remplacez dans le fichier :
- `TEAM_ID.com.fripescan.mobile` → `VOTRE_TEAM_ID.com.fripescan.mobile`

### 2. assetlinks.json (Android App Links)

**Action requise :** Remplacez `YOUR_SHA256_FINGERPRINT_HERE` par votre empreinte SHA-256.

Pour obtenir votre SHA-256 :

**Avec Google Play Console :**
1. Allez dans Google Play Console
2. Sélectionnez votre app
3. Configuration > Intégrité de l'application
4. Copiez l'empreinte SHA-256 du certificat de signature

**Avec keytool (développement) :**
```bash
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
```

**Avec keytool (production) :**
```bash
keytool -list -v -keystore your-release-key.keystore -alias your-key-alias
```

### 3. Vérification

Une fois configuré et déployé, testez vos liens :

**iOS :**
- https://search.developer.apple.com/appsearch-validation-tool/
- Entrez : https://fripescan.fr/ref/TEST123

**Android :**
- https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://fripescan.fr&relation=delegate_permission/common.handle_all_urls

### 4. Déploiement

Ces fichiers doivent être accessibles publiquement :
- https://fripescan.fr/.well-known/apple-app-site-association
- https://fripescan.fr/.well-known/assetlinks.json

**Important :** Le fichier `apple-app-site-association` ne doit PAS avoir d'extension .json
