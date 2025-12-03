const baseFromVite = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_PUBLIC_URL) || '';
const baseFromTag = (typeof document !== 'undefined' && document.querySelector('base') && document.querySelector('base').getAttribute('href')) || '';
const basePath = baseFromVite || baseFromTag || '/';

window.BASE_PATH = basePath;
export const resumeUrl = "https://drive.google.com/file/d/16dc2kfQht1uta2TgAv1TDhj3aoHc2Dvq/view?usp=drive_link";


export const categoryOptions = [
    { value: '', label: 'Select Category' },
    { value: "customer", label: "Customer" },
    { value: "travelAgent", label: "Travel Agent" },
    { value: "associatePartner", label: "Associate Partner" },
];