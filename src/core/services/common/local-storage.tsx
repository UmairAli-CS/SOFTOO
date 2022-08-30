export function GetItems(key: string) {
    try {
        if (typeof window !== undefined) {
            return localStorage.getItem(key);
        }
    } catch (error) {
        console.log('Error Message Local Storage', error);
    }
}

export function SetItem(key: string, value: string) {
    try {
        if (typeof window !== undefined) {
            localStorage.setItem(key, value);
        }
    } catch (error) {
        console.log('Error Message Local Storage', error);
    }
}

export function RemoveItem(key: string) {
    try {
        if (typeof window !== undefined) {
            localStorage.removeItem(key);
        }
    } catch (error) {
        console.log('Error Message Local Storage', error);
    }
}

export function ClearItems() {
    try {
        if (typeof window !== undefined) {
            localStorage.clear();
        }
    } catch (error) {
        console.log('Error Message Local Storage', error);
    }
}