import React from "react";
export type TypeRate = "" | "bad" | "meh" | "nice";
declare const FeedbackContext: any;
export declare function FeedbackProvider({ children, user, metadata, type, apiPath, themeColor, textColor, showOnInitial, }: {
    children: React.ReactElement;
    type: string;
    apiPath: string;
    user?: string;
    metadata?: object;
    themeColor: string;
    textColor: string;
    showOnInitial: boolean;
}): any;
export default FeedbackContext;
