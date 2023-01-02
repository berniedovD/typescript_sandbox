console.log("in settings");

interface ISettings {
  NODE_ENV: string;
  BASE_URL: string;
  LIGHTSPEED_IMAGES_URL: string;
  AMAZON_IMAGES_URL: string;
  EASYPOST_SHIPPING_LABELS_URL: string;
  IS_ADMIN: boolean;
  IS_LOGGED_IN?: boolean;
}

/**
 * Checks for presence of required environment variables and throws an error if any of the are missing
 */
interface IEnv {
  [index: string]: string | undefined;
}

const REQUIRED_ENV_VARS: IEnv = {
  REACT_APP_NODE_ENV: process.env.REACT_APP_NODE_ENV,
  REACT_APP_API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  REACT_APP_EASYPOST_SHIPPING_LABELS_URL:
    process.env.REACT_APP_EASYPOST_SHIPPING_LABELS_URL,
};

let missing: string[] = [];
console.log("REQUIRED_ENV_VARS=");
console.log(REQUIRED_ENV_VARS);
for (const key in REQUIRED_ENV_VARS) {
  console.log(`looking for key=${key} value=${REQUIRED_ENV_VARS[key]}`);
  if (REQUIRED_ENV_VARS[key as keyof IEnv] === undefined) {
    missing.push(key);
  }
}
if (missing.length > 0)
  console.log(`Missing required environment variables: ${missing.join(", ")}`);

const settings: { [index: string]: ISettings } = {
  development: {
    NODE_ENV: process.env.REACT_APP_NODE_ENV!,
    BASE_URL: process.env.REACT_APP_API_BASE_URL!,
    LIGHTSPEED_IMAGES_URL: process.env.REACT_APP_LIGHTSPEED_IMAGES_URL!,
    AMAZON_IMAGES_URL: process.env.REACT_APP_AMAZON_IMAGES_URL!,
    EASYPOST_SHIPPING_LABELS_URL:
      process.env.REACT_APP_EASYPOST_SHIPPING_LABELS_URL!,
    IS_ADMIN: true,
    IS_LOGGED_IN: true,
  },
  staging: {
    NODE_ENV: process.env.REACT_APP_NODE_ENV!,
    BASE_URL: process.env.REACT_APP_API_BASE_URL!,
    LIGHTSPEED_IMAGES_URL: process.env.REACT_LIGHTSPEED_IMAGES_URL!,
    AMAZON_IMAGES_URL: process.env.REACT_AMAZON_IMAGES_URL!,
    EASYPOST_SHIPPING_LABELS_URL:
      process.env.REACT_APP_EASYPOST_SHIPPING_LABELS_URL!,
    IS_ADMIN: window.location.hostname.includes("lindberghadmin"),
  },
  production: {
    NODE_ENV: process.env.REACT_APP_NODE_ENV!,
    BASE_URL: process.env.REACT_APP_API_BASE_URL!,
    LIGHTSPEED_IMAGES_URL:
      process.env.REACT_LIGHTSPEED_IMAGES_URL ||
      "https://lindberghadmin.medadoc.com/data/photos",
    AMAZON_IMAGES_URL:
      process.env.REACT_AMAZON_IMAGES_URL ||
      "https://lindberghadmin.medadoc.com/data/photos",
    EASYPOST_SHIPPING_LABELS_URL:
      process.env.REACT_APP_EASYPOST_SHIPPING_LABELS_URL! ||
      "https://lindberghadmin.medadoc.com/data/easypost_shipping_labels",
    IS_ADMIN: window.location.hostname.includes("lindberghadmin"),
  },
};

const target = process.env.REACT_APP_NODE_ENV || "development";

export default settings[target];
