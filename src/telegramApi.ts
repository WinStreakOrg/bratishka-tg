declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp;
    };
  }

  interface TelegramWebApp {
    initData: string;
    initDataUnsafe: any;

    close(): void;

    expand(): void;

    isExpanded: boolean;

    onEvent(eventType: string, callback: () => void): void;

    offEvent(eventType: string, callback: () => void): void;

    sendData(data: string): void;

    themeParams: TelegramThemeParams;
    version: string;
    platform: string;

    ready(): void;

    isVersionAtLeast(version: string): boolean;

    HapticFeedback: {
      impactOccurred(style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'): void;
      notificationOccurred(type: 'error' | 'success' | 'warning'): void;
      selectionChanged(): void;
    };
  }

  interface TelegramThemeParams {
    bg_color?: string;
    text_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
    secondary_bg_color?: string;
  }
}

const tg: TelegramWebApp = window.Telegram.WebApp;

export default tg;