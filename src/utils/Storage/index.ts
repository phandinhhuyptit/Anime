import { compareTwoObject, isObjectEmpty } from "utils/helpers"
class Storage {
    static clear() {
        localStorage.clear()
    }

    static remove(storageKey: string, filter: object) {
        const rawList = localStorage.getItem(storageKey);
        if (!rawList) return
        const list: object[] = JSON.parse(rawList);

        // Filter out the item we wanna remove
        localStorage.setItem(
            storageKey,
            JSON.stringify(list.filter((item) => !compareTwoObject(item, filter)))
        );
    }
    static create(storageKey: string, value: object) {
        const rawList = localStorage.getItem(storageKey);

        if (!rawList) {
            return localStorage.setItem(
                storageKey,
                JSON.stringify([value]) // Save value in array
            );
        }

        const list = JSON.parse(rawList);

        list.push(value);

        localStorage.setItem(storageKey, JSON.stringify(list));
    }


    static findOne<T extends {}>(storageKey: string, filter = {}): T | undefined {
        const rawList = localStorage.getItem(storageKey);

        if (!rawList) return undefined;

        const parsedList: T[] = JSON.parse(rawList);

        if (isObjectEmpty(filter)) {
            return parsedList[0];
        }

        return parsedList.find((item) => compareTwoObject(item, filter));
    }

    static find<T>(storageKey: string, filter = {}): T[] | [] {
        const rawList = localStorage.getItem(storageKey);

        if (!rawList) return [];

        const parsedList: T[] = JSON.parse(rawList);

        if (isObjectEmpty(filter)) {
            return parsedList;
        }

        return parsedList.filter((item) => compareTwoObject(item, filter));
    }
    static update(storageKey: string, filter: object, value: object) {
        this.remove(storageKey, filter);

        const item = this.findOne(storageKey, filter);

        const updatedItem = { ...item, ...value };

        return this.create(storageKey, updatedItem);
    }

    static has(storageKey: string, filter: object) {
        const item = this.findOne(storageKey, filter);

        if (!item) return false;

        return !isObjectEmpty(item);
    }


}

export default Storage;

