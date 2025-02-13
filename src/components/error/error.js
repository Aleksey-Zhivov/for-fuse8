import { jsx as _jsx } from "react/jsx-runtime";
import './error.scss';
export const Error = ({ errorMessage }) => (_jsx("span", { className: 'error', children: errorMessage }));
