import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Acordion.module.css';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion className={styles.Acordion} sx={{backgroundColor: '#e7ebed', color: '#5e7582' , borderRadius: '8px', boxShadow: 'none',}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: '#5e7582'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontSize: '14px', fontWeight: 500, textAlign: 'right'}}>خدمات دکتر ساینا</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{border: '1px solid #e8ebed', backgroundColor: '#fff', borderRadius: '8px', borderTopLeftRadius: '0', borderTopRightRadius: '0', borderTop: '0' }}>
            <ul className={styles.footerAcordion}>
                <li>مشاوره پزشکی</li>
                <li>مشاوره روانشناسی</li>
                <li>آزمایش در محل</li>
                <li>بانک سلامت</li>
                <li>مجله سلامت</li>
                <li>راهکار سازمانی</li>
            </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: '#e7ebed', color: '#5e7582' , borderRadius: '8px',  boxShadow: 'none'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: '#5e7582'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{fontSize: '14px', fontWeight: 500, textAlign: 'right'}}>صفحات دکتر ساینا</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{border: '1px solid #e8ebed', backgroundColor: '#fff', borderRadius: '8px', borderTopLeftRadius: '0', borderTopRightRadius: '0', borderTop: '0' }}>
            <ul className={styles.footerAcordion}>
                <li>ثبت نام پزشک </li>
                <li>ارتباط با ما</li>
                <li>درباره ما</li>
                <li>قوانین</li>
                <li>حریم شخصی</li>
                <li>سوالات متداول</li>
                <li>همکاری با ما</li>
                <li>مشاوره پزشکی در تلگرام</li>
                <li>مشاوره رایگان پزشکی</li>
                <li>درباره کرونا ویروس</li>
            </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}