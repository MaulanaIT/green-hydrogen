import DOMPurify from "dompurify";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { baseStorageURL } from "../config";

export const CheckInputValidity = (form) => {
    let result = false;

    let input = document.getElementById(form).querySelectorAll('input[required]');

    if (input.length === 0) return result;

    let i = 0, lenInput = input.length;
    while (i < lenInput) {
        let checkError = input[i].parentNode.querySelector('.error-input');
    
        if (checkError) checkError.remove();

        if (!input[i].checkValidity()) {
            let error = document.createElement('p');
            error.className = 'error-input';
            error.innerHTML = input[i].getAttribute('error-text');
        
            input[i].parentNode.appendChild(error);

            input[i].focus();
            result = false;

            break;
        }

        result = true;

        i++;
    }

    return result;
}

export const CheckSelectValidity = (form) => {
    let result = false;

    let select = document.getElementById(form).querySelectorAll('select[required]');

    if (select.length === 0) return result;

    let i = 0, lenSelect = select.length;
    while (i < lenSelect) {
        if (!select[i].checkValidity()) {
            select[i].focus();
            result = false;

            break;
        }

        result = true;

        i++;
    }

    return result;
}

export const CheckTextareaValidity = (form) => {
    let result = false;

    let textarea = document.getElementById(form).querySelectorAll('textarea[required');

    if (textarea.length === 0) return result;

    let i = 0, lenTextarea = textarea.length;

    while (i < lenTextarea) {
        let checkError = textarea[i].parentNode.querySelector('.error-input');
    
        if (checkError) checkError.remove();

        if (!textarea[i].checkValidity()) {
            let error = document.createElement('p');
            error.className = 'error-input';
            error.innerHTML = textarea[i].getAttribute('error-text');
        
            textarea[i].parentNode.appendChild(error);

            textarea[i].focus();
            result = false;

            break;
        }

        result = true;

        i++;
    }

    return result;
}

export const ConfigAPI = (token = null) => {
    const config = {
        headers: {
            'accept-language': i18next.language,
            'Authorization': `Bearer ${token}`
        }
    }

    return config;
}

export const HideLoader = () => {
    document.getElementById('loader').classList.add('d-none');
}

export const InputFormatNumber = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');
}

export const InputValidation = (event) => {
    let checkError = event.currentTarget.parentNode.querySelector('.error-input');

    if (checkError) checkError.remove();

    if (!event.currentTarget.checkValidity()) {
        let error = document.createElement('p');
        error.className = 'error-input';
        error.innerHTML = event.currentTarget.getAttribute('error-text');
    
        event.currentTarget.parentNode.appendChild(error);

        event.currentTarget.focus();
    }
}

export const IsJsonString = (string) => {
    try {
        JSON.parse(string);
    } catch (e) {
        return false;
    }

    return true;
}

export const OpenGoogleMaps = (lat, lng) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
}

export const SetPriceFormat = (harga) => {
    if (harga == '0' || harga == '' || harga == null || harga == undefined) return `Rp 0`;

    let price = harga.toString().split('.');
    let reverse = price[0].toString().split('').reverse().join('');
    let ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join(',').split('').reverse().join('');

    if (harga < 0) {
        if (price.length > 1) return `-Rp ${ribuan}.${price[1]}`;
        else return `-Rp ${ribuan}`;
    } else {
        if (price.length > 1) return `Rp ${ribuan}.${price[1]}`;
        else return `Rp ${ribuan}`;
    }
}

export const ShowLoader = () => {
    document.getElementById('loader').classList.remove('d-none');
}

export const ShowInputError = (element, text = element.getAttribute('error-text')) => {
    let checkError = element.parentNode.querySelector('.error-input');

    if (checkError) checkError.remove();
    
    let error = document.createElement('p');
    error.className = 'error-input';
    error.innerHTML = element.getAttribute(text);

    element.parentNode.appendChild(error);
}

export const StorageURL = (link) => {
    if (link) return `${baseStorageURL}${link.replaceAll('"', '')}`;
    else return '';
}

export const Translate = (props) => {
    const {t, i18n} = useTranslation();

    return i18next.t(props.title);
}