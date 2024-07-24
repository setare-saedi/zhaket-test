import React from 'react'
import TimeLineItem from '../../../components/timeLineItem/TimeLineItem';
import Header from './Header';
import { Tab,Tabs } from './TimeLine';

function History() {
    return (
        <div>
            <Header />

            <Tabs>
                <Tab label="سایت جدید" year="1403" width="w-[105px]">
                    <TimeLineItem day={'24'} month={'فروردین'} name={'علیرضا محمدی فروشنده ژاکت'} text={' با استفاده از سرویس گارد ژاکت قادر خواهید بود برای محصولات خود در ژاکِت لایسنس تعریف کرده و از نصب‌های متعدد، کپی و انتشار نسخه نال'} url={'./img/1.jpg'} />
                </Tab>
                <Tab label="نسخه دوم ژاکت" year="1399" width="w-[370px]">
                    <TimeLineItem day={'03'} month={'تیر'} name={'علیرضا محمدی فروشنده ژاکت'} text={' با استفاده از سرویس گارد ژاکت قادر خواهید بود برای محصولات خود در ژاکِت   و از نصب‌های متعدد، کپی و انتشار نسخه نال'} url={'./img/1.jpg'} />
                </Tab>
                <Tab label="نسخه اول ژاکت" year='1398' width="w-[165px]">
                    <TimeLineItem day={'11'} month={'اردیبهشت'} name={'علیرضا محمدی فروشنده ژاکت'} text={' با استفاده از سرویس گارد ژاکت قادر خواهید بود برای محصولات خود در ژاکِت   و از نصب‌های متعدد، کپی و انتشار نسخه نال'} url={'./img/1.jpg'} />
                </Tab>
                <Tab label="تاسیس ژاکت" year='1395' width="w-[120px]">
                    <TimeLineItem day={'29'} month={'اسفند'} name={'علیرضا محمدی فروشنده ژاکت'} text={'با استفاده از سرویس گارد ژاکت قادر خواهید بود برای محصولات   '} url={'./img/1.jpg'} />
                </Tab>
                <Tab label="اولین جرقه" year='1392' width="w-[100px]">
                    <TimeLineItem day={'13'} month={'دی'} name={'علیرضا محمدی فروشنده ژاکت'} text={' با استفاده از سرویس گارد ژاکت قادر خواهید بود برای محصولات خود در ژاکِت   و از نصب‌های متعدد، کپی و انتشار نسخه نال'} url={'./img/1.jpg'} />
                </Tab>
            </Tabs>
        </div>)
}

export default History