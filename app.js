App({
  globalData: {
    baseUrl: 'http://localhost:4000',
    authToken: '',
    user: null,
    booking: null,
  },

  onLaunch() {
    try {
      const token = ma.getStorageSync('telebirr_auth_token');
      if (token) {
        this.globalData.authToken = token;
      }
    } catch (e) {
      console.warn('Storage read failed', e);
    }
  },

  setAuth(token, user) {
    this.globalData.authToken = token;
    this.globalData.user = user || null;
    ma.setStorageSync('telebirr_auth_token', token);
  },

  clearAuth() {
    this.globalData.authToken = '';
    this.globalData.user = null;
    ma.removeStorageSync('telebirr_auth_token');
  },
});
