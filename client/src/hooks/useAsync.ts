import { useCallback, useEffect, useState } from 'react';

const useAsyncInternal = (func: Function, dependencies: any[], initialLoading = false) => {
    const [loading, setLoading] = useState(initialLoading);
    const [error, setError] = useState();
    const [value, setValue] = useState();

    const execute = useCallback((...params: any) => {
        setLoading(true);
        return func(...params)
            .then((data: any) => {
                setValue(data);
                setError(undefined);
                return data;
            })
            .catch((err: any) => {
                setError(err);
                setValue(undefined);
                return Promise.reject(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, dependencies);

    return { loading, error, value, execute };
};

const useAsync = (func: Function, dependencies = []) => {
    const { execute, ...state } = useAsyncInternal(func, dependencies, true);

    useEffect(() => {
        execute();
    }, [execute]);

    return state;
};

const useAsyncFn = (func: Function, dependencies = []) => {
    return useAsyncInternal(func, dependencies, false);
};

export { useAsync, useAsyncFn };
