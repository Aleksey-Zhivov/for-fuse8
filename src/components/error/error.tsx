import { FC } from 'react';
import './error.scss';
import { ErrorProps } from './types';

export const Error: FC<ErrorProps> = ({ errorMessage }) => (
    <span className='error'>{errorMessage}</span>
)