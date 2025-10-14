"use client";

import { useMediaQuery as useMUIQuery } from "@mui/material";
import { useEffect, useState } from "react";

export const useSafeMediaQuery = (query) => {
    const [mounted, setMounted] = useState(false);
    const matches = useMUIQuery(query);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted ? matches : false;
};
