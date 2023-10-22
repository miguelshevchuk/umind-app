# Pasos iniciales

>**Note**: Asegurese de haber completado el instructivo [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) hasta el paso "Crear una nueva aplicacion", antes de continuar.

## Paso 1: Instalar dependencias

Primero, usted necesitara instalar las dependencias del proyecto.

Para esto, ejecute el siguiente comando desde la _raiz_ del proyecto:

```bash
yarn install
```

## Paso 2: Iniciar Servidor Metro

Luego, usted necesitara iniciar **Metro**.

Para iniciar metro, ejecute el siguiente comando desde la _raiz_ del proyecto:

```bash
# con npm
npm start

# o con Yarn
yarn start
```

## Paso 3: Iniciar el proyecto

Este proyecto esta preparado para ejecutarse en dispositivos Android. Asegurese de tener un emulador instalado para poder iniciar el proyecto (Por ejemplo, Android Studio).
Una vez iniciado Metro, seleccione la opcion _run on Android_ 

# Compilacion

## Paso 1: Acceder a carpeta android

Este proyecto esta preparado para ejecutarse en dispositivos Android. Desde la _raiz_ del proyecto, ejecute el siguiente comando para acceder a la carpeta android

```bash
cd android
```

## Paso 2: Generar version de la APK

Ejecute el siguiente comando para generar la APK que luego se instalara en el telefono

```bash
.\gradlew assembleRelease
```

## Paso 3: Instalar APK en su telefono

La APK generada se encuentra en la carpeta **_raiz_/android/app/build/outputs/apk/release/app-release.apk** .
Copie el archivo a su telefono y ejecutelo para instalar la aplicacion. Asegurese de que el telefono cuente con los permisos necesarios para instalarlo, ya que probablemente se la detecte como aplicacion insegura por no provenir del Store de Google.