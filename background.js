var currentTheme = '';

const themes = {
  'active': {
    colors: {
        "toolbar": "rgb(255, 255, 255)",
        "toolbar_text": "rgb(35, 38, 41)",
        "frame": "rgb(222, 224, 226)",
        "tab_background_text": "rgb(0, 0, 0)",
        "toolbar_field": "rgb(255, 255, 255)",
        "toolbar_field_text": "rgb(0, 0, 0)",
        "tab_line": "rgb(61, 174, 233)",
        "popup": "rgb(255, 255, 255)",
        "popup_text": "rgb(0, 0, 0)",
        "tab_loading": "rgb(61, 174, 233)"
    }
  },
  'night': {
    colors: {
        "toolbar": "rgb(255, 255, 255)",
        "toolbar_text": "rgb(35, 38, 41)",
        "frame": "rgb(239, 240, 241)",
        "tab_background_text": "rgb(0, 0, 0)",
        "toolbar_field": "rgb(255, 255, 255)",
        "toolbar_field_text": "rgb(0, 0, 0)",
        "tab_line": "rgb(61, 174, 233)",
        "popup": "rgb(255, 255, 255)",
        "popup_text": "rgb(0, 0, 0)",
        "tab_loading": "rgb(61, 174, 233)"
    }
  }
};

var active_theme = 0;


function setTheme(theme) {
  if (currentTheme === theme) {
    return;
  }
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}



browser.windows.onFocusChanged.addListener((windowId) => {
    if (active_theme === 1) {
        setTheme("active");
        active_theme = 0;
    } else {
        setTheme("night");
        active_theme = 1;
    }

  });

  setTheme("active")