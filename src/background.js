const FACEBOOK_CONTAINER_DETAILS = {
  name: 'Facebook',
  color: 'toolbar',
  icon: 'fence'
};

const FACEBOOK_DOMAINS = [
  'facebook.com',
  'www.facebook.com',
  'facebook.net',
  'fb.com',
  'fbcdn.net',
  'fbcdn.com',
  'fbsbx.com',
  'tfbnw.net',
  'facebook-web-clients.appspot.com',
  'fbcdn-profile-a.akamaihd.net',
  'fbsbx.com.online-metrix.net',
  'connect.facebook.net.edgekey.net',

  'instagram.com',
  'cdninstagram.com',
  'instagramstatic-a.akamaihd.net',
  'instagramstatic-a.akamaihd.net.edgesuite.net',

  'messenger.com',
  'm.me',
  'messengerdevelopers.com',

  'atdmt.com',

  'onavo.com',
  'oculus.com',
  'oculusvr.com',
  'oculusbrand.com',
  'oculusforbusiness.com',

  'mail.google.com',
  'plus.sandbox.google.com',
  'remotedesktop.corp.google.com',
  'corp.goog',
  'accounts.google.com',
  'admin.google.com',
  'apis.google.com',
  'appengine.google.com',
  'calendar.google.com',
  'checkout.google.com',
  'chrome.google.com',
  'classroom.google.com',
  'cloud.google.com',
  'code.google.com',
  'contributor.google.com',
  'dl.google.com',
  'docs.google.com',
  'domains.google.com',
  'drive.google.com',
  'encrypted.google.com',
  'fi.google.com',
  'glass.google.com',
  'goto.google.com',
  'groups.google.com',
  'hangouts.google.com',
  'history.google.com',
  'hostedtalkgadget.google.com',
  'inbox.google.com',
  'login.corp.google.com',
  'mail-settings.google.com',
  'meet.google.com',
  'myaccount.google.com',
  'myactivity.google.com',
  'passwords.google.com',
  'pixel.google.com',
  'play.google.com',
  'plus.google.com',
  'profiles.google.com',
  'script.google.com',
  'security.google.com',
  'sites.google.com',
  'spreadsheets.google.com',
  'talkgadget.google.com',
  'talk.google.com',
  'wallet.google.com',
  'payments.google.com',
  'xn--7xa.google.com',
  'dns.google.com',
  'build.chromium.org',
  'bugs.chromium.org',
  'cdn.ampproject.org',
  'chrome.com',
  'chrome-devtools-frontend.appspot.com',
  'chromereporting-pa.googleapis.com',
  'chromiumcodereview.appspot.com',
  'codereview.appspot.com',
  'codereview.chromium.org',
  'crbug.com',
  'crosbug.com',
  'crrev.com',
  'firebaseio.com',
  'g.co',
  'g4w.co',
  'gmail.com',
  'goo.gl',
  'googlecode.com',
  'googlemail.com',
  'googleplex.com',
  'googlesource.com',
  'gvt2.com',
  'gvt3.com',
  'developer.android.com',
  'market.android.com',
  'translate.googleapis.com',
  'withgoogle.com',
  'withyoutube.com',
  'www.gmail.com',
  'www.googlemail.com',
  'google-analytics.com',
  'stats.g.doubleclick.net',
  'chromiumbugs.appspot.com',
  'youtube.com',
  'webfilings.appspot.com',
  'webfilings-eu.appspot.com',
  'webfilings-eu-mirror.appspot.com',
  'webfilings-mirror-hrd.appspot.com',
  'wf-bigsky-master.appspot.com',
  'wf-demo-eu.appspot.com',
  'wf-demo-hrd.appspot.com',
  'wf-dogfood-hrd.appspot.com',
  'wf-pentest.appspot.com',
  'wf-staging-hr.appspot.com',
  'wf-training-hrd.appspot.com',
  'wf-training-master.appspot.com',
  'wf-trial-hrd.appspot.com',
  'w-spotlight.appspot.com',
  'xbrlsuccess.appspot.com',
  '2mdn.net',
  'android.com',
  'appspot.com',
  'blogger.com',
  'blogspot.com',
  'doubleclick.net',
  'ggpht.com',
  'google.ac',
  'google.ad',
  'googleadservices.com',
  'google.ae',
  'google.af',
  'google.ag',
  'google.am',
  'googleapis.com',
  'google.as',
  'google.at',
  'google.az',
  'google.ba',
  'google.be',
  'google.bf',
  'google.bg',
  'google.bi',
  'google.bj',
  'google.bs',
  'google.by',
  'google.ca',
  'google.cat',
  'google.cc',
  'google.cd',
  'google.cf',
  'google.cg',
  'google.ch',
  'google.ci',
  'google.cl',
  'google.cm',
  'google.cn',
  'google.co.ao',
  'google.co.bw',
  'google.co.ck',
  'google.co.cr',
  'google.co.hu',
  'google.co.id',
  'google.co.il',
  'google.co.im',
  'google.co.in',
  'google.co.je',
  'google.co.jp',
  'google.co.ke',
  'google.co.kr',
  'google.co.ls',
  'google.com.af',
  'google.com.ag',
  'google.com.ai',
  'google.co.ma',
  'google.com.ar',
  'google.com.au',
  'google.com.bd',
  'google.com.bh',
  'google.com.bn',
  'google.com.bo',
  'google.com.br',
  'google.com.by',
  'google.com.bz',
  'google.com.cn',
  'google.com.co',
  'google.com.cu',
  'google.com.cy',
  'google.com.do',
  'google.com.ec',
  'google.com.eg',
  'google.com.et',
  'google.com.fj',
  'google.com.ge',
  'google.com.gh',
  'google.com.gi',
  'google.com.gr',
  'google.com.gt',
  'google.com.hk',
  'google.com',
  'google.com.iq',
  'google.com.jm',
  'google.com.jo',
  'google.com.kh',
  'google.com.kw',
  'google.com.lb',
  'google.com.ly',
  'googlecommerce.com',
  'google.com.mt',
  'google.com.mx',
  'google.com.my',
  'google.com.na',
  'google.com.nf',
  'google.com.ng',
  'google.com.ni',
  'google.com.np',
  'google.com.nr',
  'google.com.om',
  'google.com.pa',
  'google.com.pe',
  'google.com.ph',
  'google.com.pk',
  'google.com.pl',
  'google.com.pr',
  'google.com.py',
  'google.com.qa',
  'google.com.ru',
  'google.com.sa',
  'google.com.sb',
  'google.com.sg',
  'google.com.sl',
  'google.com.sv',
  'google.com.tj',
  'google.com.tn',
  'google.com.tr',
  'google.com.tw',
  'google.com.ua',
  'google.com.uy',
  'google.com.vc',
  'google.com.ve',
  'google.com.vn',
  'google.co.mz',
  'google.co.nz',
  'google.co.th',
  'google.co.tz',
  'google.co.ug',
  'google.co.uk',
  'google.co.uz',
  'google.co.ve',
  'google.co.vi',
  'google.co.za',
  'google.co.zm',
  'google.co.zw',
  'google.cv',
  'google.cz',
  'google.de',
  'google.dj',
  'google.dk',
  'google.dm',
  'google.dz',
  'google.ee',
  'google.es',
  'google.fi',
  'google.fm',
  'google.fr',
  'google.ga',
  'google.ge',
  'google.gg',
  'google.gl',
  'google.gm',
  'google.gp',
  'google.gr',
  'googlegroups.com',
  'google.gy',
  'google.hk',
  'google.hn',
  'google.hr',
  'google.ht',
  'google.hu',
  'google.ie',
  'google.im',
  'google.info',
  'google.iq',
  'google.is',
  'google.it.ao',
  'google.it',
  'google.je',
  'google.jobs',
  'google.jo',
  'google.jp',
  'google.kg',
  'google.ki',
  'google.kz',
  'google.la',
  'google.li',
  'google.lk',
  'google.lt',
  'google.lu',
  'google.lv',
  'google.md',
  'google.me',
  'google.mg',
  'google.mk',
  'google.ml',
  'google.mn',
  'google.ms',
  'google.mu',
  'google.mv',
  'google.mw',
  'google.ne',
  'google.ne.jp',
  'google.net',
  'google.nl',
  'google.no',
  'google.nr',
  'google.nu',
  'google.off.ai',
  'google.pk',
  'google.pl',
  'google.pn',
  'google.ps',
  'google.pt',
  'google.ro',
  'google.rs',
  'google.ru',
  'google.rw',
  'google.sc',
  'google.se',
  'google.sh',
  'google.si',
  'google.sk',
  'google.sm',
  'google.sn',
  'google.so',
  'google.st',
  'googlesyndication.com',
  'googletagmanager.com',
  'googletagservices.com',
  'google.td',
  'google.tg',
  'google.tk',
  'google.tl',
  'google.tm',
  'google.tn',
  'google.to',
  'google.tt',
  'googleusercontent.com',
  'google.us',
  'google.uz',
  'google.vg',
  'googlevideo.com',
  'google.vu',
  'googleweblight.com',
  'google.ws',
  'gstatic.com',
  'gstatic.cn',
  'gvt1.com',
  'static.googleadsserving.cn',
  'urchin.com',
  'www.googlegroups.com',
  'youtu.be',
  'youtube-nocookie.com',
  'ytimg.com',

  'twitter.com',
  'www.twitter.com',
  'api.twitter.com',
  'oauth.twitter.com',
  'mobile.twitter.com',
  'dev.twitter.com',
  'business.twitter.com',
  'platform.twitter.com',
  'twimg.com',

  'amazon.ca',
  'amazon.cn',
  'amazon.co.jp',
  'amazon.co.uk',
  'amazon.com',
  'amazon.com.au',
  'amazon.com.br',
  'amazon.com.mx',
  'amazon.de',
  'amazon.es',
  'amazon.fr',
  'amazon.it',
  'amazon.nl',

  'reddit.com'
];

const MAC_ADDON_ID = '@testpilot-containers';

let macAddonEnabled = false;
let facebookCookieStoreId = null;

// TODO: refactor canceledRequests and tabsWaitingToLoad into tabStates
const canceledRequests = {};
const tabsWaitingToLoad = {};
const tabStates = {};

const facebookHostREs = [];

async function isMACAddonEnabled() {
  try {
    const macAddonInfo = await browser.management.get(MAC_ADDON_ID);
    if (macAddonInfo.enabled) {
      sendJailedDomainsToMAC();
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
}

async function setupMACAddonListeners() {
  browser.runtime.onMessageExternal.addListener((message, sender) => {
    if (sender.id !== '@testpilot-containers') {
      return;
    }
    switch (message.method) {
      case 'MACListening':
        sendJailedDomainsToMAC();
        break;
    }
  });
  function disabledExtension(info) {
    if (info.id === MAC_ADDON_ID) {
      macAddonEnabled = false;
    }
  }
  function enabledExtension(info) {
    if (info.id === MAC_ADDON_ID) {
      macAddonEnabled = true;
    }
  }
  browser.management.onInstalled.addListener(enabledExtension);
  browser.management.onEnabled.addListener(enabledExtension);
  browser.management.onUninstalled.addListener(disabledExtension);
  browser.management.onDisabled.addListener(disabledExtension);
}

async function sendJailedDomainsToMAC() {
  try {
    return await browser.runtime.sendMessage(MAC_ADDON_ID, {
      method: 'jailedDomains',
      urls: FACEBOOK_DOMAINS.map(domain => {
        return `https://${domain}/`;
      })
    });
  } catch (e) {
    // We likely might want to handle this case: https://github.com/mozilla/contain-facebook/issues/113#issuecomment-380444165
    return false;
  }
}

async function getMACAssignment(url) {
  if (!macAddonEnabled) {
    return false;
  }

  try {
    const assignment = await browser.runtime.sendMessage(MAC_ADDON_ID, {
      method: 'getAssignment',
      url
    });
    return assignment;
  } catch (e) {
    return false;
  }
}

function cancelRequest(tab, options) {
  // we decided to cancel the request at this point, register canceled request
  canceledRequests[tab.id] = {
    requestIds: {
      [options.requestId]: true
    },
    urls: {
      [options.url]: true
    }
  };

  // since webRequest onCompleted and onErrorOccurred are not 100% reliable
  // we register a timer here to cleanup canceled requests, just to make sure we don't
  // end up in a situation where certain urls in a tab.id stay canceled
  setTimeout(() => {
    if (canceledRequests[tab.id]) {
      delete canceledRequests[tab.id];
    }
  }, 2000);
}

function shouldCancelEarly(tab, options) {
  // we decided to cancel the request at this point
  if (!canceledRequests[tab.id]) {
    cancelRequest(tab, options);
  } else {
    let cancelEarly = false;
    if (
      canceledRequests[tab.id].requestIds[options.requestId] ||
      canceledRequests[tab.id].urls[options.url]
    ) {
      // same requestId or url from the same tab
      // this is a redirect that we have to cancel early to prevent opening two tabs
      cancelEarly = true;
    }
    // register this requestId and url as canceled too
    canceledRequests[tab.id].requestIds[options.requestId] = true;
    canceledRequests[tab.id].urls[options.url] = true;
    if (cancelEarly) {
      return true;
    }
  }
  return false;
}

function generateFacebookHostREs() {
  for (let facebookDomain of FACEBOOK_DOMAINS) {
    facebookHostREs.push(new RegExp(`^(.*\\.)?${facebookDomain}$`));
  }
}

async function clearFacebookCookies() {
  // Clear all facebook cookies
  const containers = await browser.contextualIdentities.query({});
  containers.push({
    cookieStoreId: 'firefox-default'
  });

  let macAssignments = [];
  if (macAddonEnabled) {
    const promises = FACEBOOK_DOMAINS.map(async facebookDomain => {
      const assigned = await getMACAssignment(`https://${facebookDomain}/`);
      return assigned ? facebookDomain : null;
    });
    macAssignments = await Promise.all(promises);
  }

  FACEBOOK_DOMAINS.map(async facebookDomain => {
    const facebookCookieUrl = `https://${facebookDomain}/`;

    // dont clear cookies for facebookDomain if mac assigned (with or without www.)
    if (
      macAddonEnabled &&
      (macAssignments.includes(facebookDomain) ||
        macAssignments.includes(`www.${facebookDomain}`))
    ) {
      return;
    }

    containers.map(async container => {
      const storeId = container.cookieStoreId;
      if (storeId === facebookCookieStoreId) {
        // Don't clear cookies in the Facebook Container
        return;
      }

      const cookies = await browser.cookies.getAll({
        domain: facebookDomain,
        storeId
      });

      cookies.map(cookie => {
        browser.cookies.remove({
          name: cookie.name,
          url: facebookCookieUrl,
          storeId
        });
      });
      // Also clear Service Workers as it breaks detecting onBeforeRequest
      await browser.browsingData.remove(
        { hostnames: [facebookDomain] },
        { serviceWorkers: true }
      );
    });
  });
}

async function setupContainer() {
  // Use existing Facebook container, or create one

  const info = await browser.runtime.getBrowserInfo();
  if (parseInt(info.version) < 67) {
    FACEBOOK_CONTAINER_DETAILS.color = 'blue';
    FACEBOOK_CONTAINER_DETAILS.icon = 'briefcase';
  }

  const contexts = await browser.contextualIdentities.query({
    name: FACEBOOK_CONTAINER_DETAILS.name
  });
  if (contexts.length > 0) {
    const facebookContext = contexts[0];
    facebookCookieStoreId = facebookContext.cookieStoreId;
    // Make existing Facebook container the "fence" icon if needed
    if (
      facebookContext.color !== FACEBOOK_CONTAINER_DETAILS.color ||
      facebookContext.icon !== FACEBOOK_CONTAINER_DETAILS.icon
    ) {
      await browser.contextualIdentities.update(facebookCookieStoreId, {
        color: FACEBOOK_CONTAINER_DETAILS.color,
        icon: FACEBOOK_CONTAINER_DETAILS.icon
      });
    }
  } else {
    const context = await browser.contextualIdentities.create(
      FACEBOOK_CONTAINER_DETAILS
    );
    facebookCookieStoreId = context.cookieStoreId;
  }
  // Initialize domainsAddedToFacebookContainer if needed
  const fbcStorage = await browser.storage.local.get();
  if (!fbcStorage.domainsAddedToFacebookContainer) {
    await browser.storage.local.set({ domainsAddedToFacebookContainer: [] });
  }
}

async function maybeReopenTab(url, tab, request) {
  const macAssigned = await getMACAssignment(url);
  if (macAssigned) {
    // We don't reopen MAC assigned urls
    return;
  }
  const cookieStoreId = await shouldContainInto(url, tab);
  if (!cookieStoreId) {
    // Tab doesn't need to be contained
    return;
  }

  if (request && shouldCancelEarly(tab, request)) {
    // We need to cancel early to prevent multiple reopenings
    return { cancel: true };
  }

  await browser.tabs.create({
    url,
    cookieStoreId,
    active: tab.active,
    index: tab.index,
    windowId: tab.windowId
  });
  browser.tabs.remove(tab.id);

  return { cancel: true };
}

function isFacebookURL(url) {
  const parsedUrl = new URL(url);
  for (let facebookHostRE of facebookHostREs) {
    if (facebookHostRE.test(parsedUrl.host)) {
      return true;
    }
  }
  return false;
}

// TODO: refactor parsedUrl "up" so new URL doesn't have to be called so much
// TODO: refactor fbcStorage "up" so browser.storage.local.get doesn't have to be called so much
async function addDomainToFacebookContainer(url) {
  const parsedUrl = new URL(url);
  const fbcStorage = await browser.storage.local.get();
  fbcStorage.domainsAddedToFacebookContainer.push(parsedUrl.host);
  await browser.storage.local.set({
    domainsAddedToFacebookContainer: fbcStorage.domainsAddedToFacebookContainer
  });
}

async function removeDomainFromFacebookContainer(domain) {
  const fbcStorage = await browser.storage.local.get();
  const domainIndex = fbcStorage.domainsAddedToFacebookContainer.indexOf(
    domain
  );
  fbcStorage.domainsAddedToFacebookContainer.splice(domainIndex, 1);
  await browser.storage.local.set({
    domainsAddedToFacebookContainer: fbcStorage.domainsAddedToFacebookContainer
  });
}

async function isAddedToFacebookContainer(url) {
  const parsedUrl = new URL(url);
  const fbcStorage = await browser.storage.local.get();
  if (fbcStorage.domainsAddedToFacebookContainer.includes(parsedUrl.host)) {
    return true;
  }
  return false;
}

async function shouldContainInto(url, tab) {
  if (!url.startsWith('http')) {
    // we only handle URLs starting with http(s)
    return false;
  }

  const hasBeenAddedToFacebookContainer = await isAddedToFacebookContainer(url);

  if (isFacebookURL(url) || hasBeenAddedToFacebookContainer) {
    if (tab.cookieStoreId !== facebookCookieStoreId) {
      // Facebook-URL outside of Facebook Container Tab
      // Should contain into Facebook Container
      return facebookCookieStoreId;
    }
  } else if (tab.cookieStoreId === facebookCookieStoreId) {
    // Non-Facebook-URL inside Facebook Container Tab
    // Should contain into Default Container
    return 'firefox-default';
  }

  return false;
}

async function maybeReopenAlreadyOpenTabs() {
  const tabsOnUpdated = (tabId, changeInfo, tab) => {
    if (changeInfo.url && tabsWaitingToLoad[tabId]) {
      // Tab we're waiting for switched it's url, maybe we reopen
      delete tabsWaitingToLoad[tabId];
      maybeReopenTab(tab.url, tab);
    }
    if (tab.status === 'complete' && tabsWaitingToLoad[tabId]) {
      // Tab we're waiting for completed loading
      delete tabsWaitingToLoad[tabId];
    }
    if (!Object.keys(tabsWaitingToLoad).length) {
      // We're done waiting for tabs to load, remove event listener
      browser.tabs.onUpdated.removeListener(tabsOnUpdated);
    }
  };

  // Query for already open Tabs
  const tabs = await browser.tabs.query({});
  tabs.map(async tab => {
    if (tab.incognito) {
      return;
    }
    if (tab.url === 'about:blank') {
      if (tab.status !== 'loading') {
        return;
      }
      // about:blank Tab is still loading, so we indicate that we wait for it to load
      // and register the event listener if we haven't yet.
      //
      // This is a workaround until platform support is implemented:
      // https://bugzilla.mozilla.org/show_bug.cgi?id=1447551
      // https://github.com/mozilla/multi-account-containers/issues/474
      tabsWaitingToLoad[tab.id] = true;
      if (!browser.tabs.onUpdated.hasListener(tabsOnUpdated)) {
        browser.tabs.onUpdated.addListener(tabsOnUpdated);
      }
    } else {
      // Tab already has an url, maybe we reopen
      maybeReopenTab(tab.url, tab);
    }
  });
}

function stripFbclid(url) {
  const strippedUrl = new URL(url);
  strippedUrl.searchParams.delete('fbclid');
  return strippedUrl.href;
}

async function getActiveTab() {
  const [activeTab] = await browser.tabs.query({
    currentWindow: true,
    active: true
  });
  return activeTab;
}

async function windowFocusChangedListener(windowId) {
  if (windowId !== browser.windows.WINDOW_ID_NONE) {
    const activeTab = await getActiveTab();
    updateBrowserActionIcon(activeTab);
  }
}

function tabUpdateListener(tabId, changeInfo, tab) {
  updateBrowserActionIcon(tab);
}

/*
async function areAllStringsTranslated () {
  const browserUILanguage = browser.i18n.getUILanguage();
  if (browserUILanguage && browserUILanguage.startsWith("en")) {
    return true;
  }
  const enMessagesPath = browser.extension.getURL("_locales/en/messages.json");
  const resp = await fetch(enMessagesPath);
  const enMessages = await resp.json();

  // TODO: Check Pontoon for available translations instead of checking
  // messages files
  for (const key of Object.keys(enMessages)){
    // TODO: this doesn't check if the add-on messages are translated into
    // any other browser.i18n.getAcceptedLanguages() options ... but then,
    // I don't think browser.i18n let's us get messages in anything but the
    // primary language anyway? Does browser.i18n.getMessage automatically
    // check for secondary languages?
    const enMessage = enMessages[key].message;
    const translatedMessage = browser.i18n.getMessage(key);
    if (translatedMessage == enMessage) {
      return false;
    }
  }
  return true;
}
*/

async function updateBrowserActionIcon(tab) {
  browser.browserAction.setBadgeText({ text: '' });

  if (tab.incognito) {
    browser.browserAction.disable(tab.id);
    return;
  }

  const url = tab.url;
  const hasBeenAddedToFacebookContainer = await isAddedToFacebookContainer(url);

  if (isFacebookURL(url)) {
    // TODO: change panel logic from browser.storage to browser.runtime.onMessage
    // so the panel.js can "ask" background.js which panel it should show
    browser.storage.local.set({ CURRENT_PANEL: 'on-facebook' });
    browser.browserAction.setPopup({ tabId: tab.id, popup: './panel.html' });
  } else if (hasBeenAddedToFacebookContainer) {
    browser.storage.local.set({ CURRENT_PANEL: 'in-fbc' });
  } else {
    const tabState = tabStates[tab.id];
    const panelToShow =
      tabState && tabState.trackersDetected
        ? 'trackers-detected'
        : 'no-trackers';
    browser.storage.local.set({ CURRENT_PANEL: panelToShow });
    browser.browserAction.setPopup({ tabId: tab.id, popup: './panel.html' });
    browser.browserAction.setBadgeBackgroundColor({ color: '#6200A4' });
    if (panelToShow === 'trackers-detected') {
      browser.browserAction.setBadgeText({ text: '!' });
    }
  }
}

async function containFacebook(request) {
  if (tabsWaitingToLoad[request.tabId]) {
    // Cleanup just to make sure we don't get a race-condition with startup reopening
    delete tabsWaitingToLoad[request.tabId];
  }

  const tab = await browser.tabs.get(request.tabId);
  updateBrowserActionIcon(tab);

  const url = new URL(request.url);
  const urlSearchParm = new URLSearchParams(url.search);
  if (urlSearchParm.has('fbclid')) {
    return { redirectUrl: stripFbclid(request.url) };
  }
  // Listen to requests and open Facebook into its Container,
  // open other sites into the default tab context
  if (request.tabId === -1) {
    // Request doesn't belong to a tab
    return;
  }

  if (tab.incognito) {
    // We don't handle incognito tabs
    return;
  }

  return maybeReopenTab(request.url, tab, request);
}

// Lots of this is borrowed from old blok code:
// https://github.com/mozilla/blok/blob/master/src/js/background.js
async function blockFacebookSubResources(requestDetails) {
  if (requestDetails.type === 'main_frame') {
    return {};
  }

  if (typeof requestDetails.originUrl === 'undefined') {
    return {};
  }

  const urlIsFacebook = isFacebookURL(requestDetails.url);
  const originUrlIsFacebook = isFacebookURL(requestDetails.originUrl);

  if (!urlIsFacebook) {
    return {};
  }

  if (originUrlIsFacebook) {
    const message = { msg: 'facebook-domain' };
    // Send the message to the content_script
    browser.tabs.sendMessage(requestDetails.tabId, message);
    return {};
  }

  const hasBeenAddedToFacebookContainer = await isAddedToFacebookContainer(
    requestDetails.originUrl
  );

  if (urlIsFacebook && !originUrlIsFacebook) {
    if (!hasBeenAddedToFacebookContainer) {
      const message = { msg: 'blocked-facebook-subresources' };
      // Send the message to the content_script
      browser.tabs.sendMessage(requestDetails.tabId, message);

      tabStates[requestDetails.tabId] = { trackersDetected: true };
      return { cancel: true };
    } else {
      const message = { msg: 'allowed-facebook-subresources' };
      // Send the message to the content_script
      browser.tabs.sendMessage(requestDetails.tabId, message);
      return {};
    }
  }
  return {};
}

function setupWebRequestListeners() {
  browser.webRequest.onCompleted.addListener(
    options => {
      if (canceledRequests[options.tabId]) {
        delete canceledRequests[options.tabId];
      }
    },
    { urls: ['<all_urls>'], types: ['main_frame'] }
  );
  browser.webRequest.onErrorOccurred.addListener(
    options => {
      if (canceledRequests[options.tabId]) {
        delete canceledRequests[options.tabId];
      }
    },
    { urls: ['<all_urls>'], types: ['main_frame'] }
  );

  // Add the main_frame request listener
  browser.webRequest.onBeforeRequest.addListener(
    containFacebook,
    { urls: ['<all_urls>'], types: ['main_frame'] },
    ['blocking']
  );

  // Add the sub-resource request listener
  browser.webRequest.onBeforeRequest.addListener(
    blockFacebookSubResources,
    { urls: ['<all_urls>'] },
    ['blocking']
  );
}

function setupWindowsAndTabsListeners() {
  browser.tabs.onUpdated.addListener(tabUpdateListener);
  browser.tabs.onRemoved.addListener(tabId => delete tabStates[tabId]);
  browser.windows.onFocusChanged.addListener(windowFocusChangedListener);
}

(async function init() {
  await setupMACAddonListeners();
  macAddonEnabled = await isMACAddonEnabled();

  try {
    await setupContainer();
  } catch (error) {
    // TODO: Needs backup strategy
    // See https://github.com/mozilla/contain-facebook/issues/23
    // Sometimes this add-on is installed but doesn't get a facebookCookieStoreId ?
    // eslint-disable-next-line no-console
    console.error(error);
    return;
  }
  clearFacebookCookies();
  generateFacebookHostREs();
  setupWebRequestListeners();
  setupWindowsAndTabsListeners();

  browser.runtime.onMessage.addListener((message, { url }) => {
    if (message === 'what-sites-are-added') {
      return browser.storage.local
        .get()
        .then(fbcStorage => fbcStorage.domainsAddedToFacebookContainer);
    } else if (message.removeDomain) {
      removeDomainFromFacebookContainer(message.removeDomain).then(
        results => results
      );
    } else {
      addDomainToFacebookContainer(url).then(results => results);
    }
  });

  maybeReopenAlreadyOpenTabs();

  const activeTab = await getActiveTab();
  updateBrowserActionIcon(activeTab);
})();
