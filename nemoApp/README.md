# Welcome to your Expo app 👋
Langkah 1: Instalasi Node.js
Pastikan Anda telah menginstal Node.js di sistem Anda. Anda dapat mengunduhnya dari nodejs.org.

Langkah 2: Instalasi Expo CLI
Alih-alih menginstal Expo CLI secara global, disarankan menggunakan npx untuk menjalankan Expo CLI.

sh
Copy code
npx create-expo-app my-new-project
Langkah 3: Menjalankan Proyek Expo
Navigasi ke direktori proyek yang baru saja dibuat dan jalankan proyek.

sh
Copy code
cd my-new-project
npx expo start
Langkah 4: Instalasi EAS CLI
Expo Application Services (EAS) digunakan untuk build proyek. Instal EAS CLI secara global.

sh
Copy code
npm install -g eas-cli
Langkah 5: Login ke Akun Expo
Login ke akun Expo Anda. Jika belum memiliki akun, Anda dapat mendaftar terlebih dahulu.

sh
Copy code
eas login
Langkah 6: Konfigurasi EAS Build
Inisialisasi proyek untuk EAS build dengan membuat file konfigurasi eas.json.

sh
Copy code
eas build:configure
Langkah 7: Membuat Konfigurasi eas.json
Buat atau edit file eas.json di root proyek Anda untuk mengatur bagaimana aplikasi akan di-build.

Contoh eas.json:

json
Copy code
{
  "build": {
    "production": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
Langkah 8: Build APK Menggunakan EAS
Jalankan perintah berikut untuk memulai build APK.

sh
Copy code
eas build --platform android
Langkah 9: Unduh APK
Setelah proses build selesai, Anda akan menerima link untuk mengunduh file APK. Expo akan mengirimkan email dengan link tersebut atau Anda dapat menemukannya di dasbor akun Expo Anda.

Ringkasan Perintah
Membuat Proyek Expo:

sh
Copy code
npx create-expo-app my-new-project
Menjalankan Proyek:

sh
Copy code
cd my-new-project
npx expo start
Instalasi EAS CLI:

sh
Copy code
npm install -g eas-cli
Login ke Expo:

sh
Copy code
eas login
Konfigurasi EAS:

sh
Copy code
eas build:configure
Buat eas.json:

json
Copy code
{
  "build": {
    "production": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
Build APK:

sh
Copy code
eas build --platform android





This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
