class LocalStorage {
  constructor() {
    this.storage = localStorage;
  }

  set(data, propName = null) {
    const dataType = Object.prototype.toString.call(data);

    switch (dataType) {
      case '[object Array]': {
        if (!propName) return;

        const dataSerialized = JSON.stringify(data);
        this.storage.setItem(propName, dataSerialized);

        break;
      }
      case '[object Object]': {
        if (propName) {
          const dataSerialized = JSON.stringify(data);
          this.storage.setItem(propName, dataSerialized);

          break;
        }

        const keys = Object.keys(data);
        keys.forEach(key => {
          let name = key;
          let value = data[key];
          if (Array.isArray(value)) {
            name = `${name}[serialized]`;
            value = JSON.stringify(value);
          }
          this.storage.setItem(name, value);
        });

        break;
      }
      default: {
        if (!propName) return;

        this.storage.setItem(propName, data);
      }
    }
  }

  remove(keys) {
    const type = Object.prototype.toString.call(keys);

    switch (type) {
      case '[object String]': {
        this.storage.removeItem(keys);

        break;
      }
      case '[object Array]': {
        keys.forEach(key => this.storage.removeItem(key));

        break;
      }
      default:
    }
  }

  get(keys, options) {
    let result;
    const type = Object.prototype.toString.call(keys);

    switch (type) {
      case '[object String]': {
        result = this.storage.getItem(keys);

        if (options && options.serialized) {
          result = JSON.parse(result);
        }

        break;
      }
      case '[object Array]': {
        result = keys.reduce((acc, key) => {
          let value = this.storage.getItem(key);

          if (/\[serialized\]$/.test(key)) {
            value = JSON.parse(value);
          }

          acc[key] = value;

          return acc;
        }, {});

        break;
      }
      default: {
        return false;
      }
    }

    return result;
  }
}

export default LocalStorage;
