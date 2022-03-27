import i18next from "i18next";
import { useTranslation } from "react-i18next";

export const Translate = (props) => {
    const {t, i18n} = useTranslation();

    return i18next.t(props.title);
}