export function GetItems(key: string) {
    try {
        if (typeof window !== undefined) {
            return sessionStorage.getItem(key);
        }
    } catch (error) {
        console.log('Error Message GetItems Session Storage', error);
    }
}

export function SetItem(key: string, value: string) {
    try {
        if (typeof window !== undefined) {
            sessionStorage.setItem(key, value);
        }
    } catch (error) {
        console.log('Error Message SetItem Session Storage', error);
    }
}

export function RemoveItem(key: string) {
    try {
        if (typeof window !== undefined) {
            sessionStorage.removeItem(key);
        }
    } catch (error) {
        console.log('Error Message RemoveItem Session Storage', error);
    }
}

export function ClearItems() {
    try {
        if (typeof window !== undefined) {
            sessionStorage.clear();
        }
    } catch (error) {
        console.log('Error Message ClearItems Session Storage', error);
    }
}