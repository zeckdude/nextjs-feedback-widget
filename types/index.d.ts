import React from "react";
import "./styles.css";
export type TypeForm = "form" | "rate" | "full";
export interface IFeedbackWidget {
    user?: string;
    metadata?: object;
    type?: TypeForm;
    apiPath?: string;
    themeColor?: string;
    textColor?: string;
    title?: null | string | React.ReactElement;
    description?: null | string | React.ReactElement;
    showOnInitial?: boolean;
    customIcon?: React.ReactElement;
}
export default function FeedbackWidget({ user, metadata, type, apiPath, themeColor, textColor, title, description, showOnInitial, customIcon, }: IFeedbackWidget): any;
