export class Logger {
  static info(message: string) {
    console.log(`ℹ️ [INFO] ${message}`);
  }

  static error(message: string) {
    console.error(`❌ [ERROR] ${message}`);
  }

  static step(message: string) {
    console.log(`➡️ [STEP] ${message}`);
  }
}
