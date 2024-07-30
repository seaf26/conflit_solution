import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
const NotFound = () => {
return (
    <Fragment>
        <div className={styles.not_found}>

        <h1>عذرا الصفحة التي تبحث عنها غير موجودة</h1>
        <p>يرجى التحقق من العنوان المدخل أو الانتقال إلى الصفحة الرئيسية.</p>
        <Link to='/'>العودة إلى الصفحة الرئيسية</Link>
        </div>
        
    </Fragment>
);
};

export default NotFound;