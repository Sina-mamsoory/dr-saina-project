import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './Accordion.module.css';

export default function SimpleAccordion() {
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'auto', gridGap: '20px'}}>
      <Accordion className={styles.Acordion} sx={{backgroundColor: '#f3f3f3', color: '#032133' , borderRadius: '8px', boxShadow: 'none'}}>
        <AccordionSummary  
          expandIcon={<ExpandMoreIcon sx={{color: '#5e7582'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span className={styles.AcordionBefore}></span>  
          <Typography sx={{fontSize: '14px', fontWeight: 500, textAlign: 'right'}}>چه زمانی تخفیف به من تعلق می گیرد؟</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{border: '1px solid #e8ebed', backgroundColor: '#fff', borderRadius: '8px', borderTopLeftRadius: '0', borderTopRightRadius: '0', borderTop: '0' }}>
          <Typography sx={{fontSize: '14px', color: '#5e7582', textAlign: 'right'}}>
              بلافاصله بعد از پرداخت اولین مشاوره توسط فردی که دعوت کرده، کد تخفیف به شما تعلق میگیرد .
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.Acordion} sx={{backgroundColor: '#f3f3f3', color: '#032133' , borderRadius: '8px', boxShadow: 'none'}}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon sx={{color: '#5e7582'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <span className={styles.AcordionBefore}></span> 
          <Typography sx={{fontSize: '14px', fontWeight: 500, textAlign: 'right'}}>دکتر ساینا را به چند نفر می توانم معرفی کنم؟</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{border: '1px solid #e8ebed', backgroundColor: '#fff', borderRadius: '8px', borderTopLeftRadius: '0', borderTopRightRadius: '0', borderTop: '0' }}>
          <Typography sx={{fontSize: '14px', color: '#5e7582', textAlign: 'right'}}>
              محدودیتی وجو ندارد. به ازای هر فرد جدید یک کد تخفیف دریافت خواهید کرد .
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.Acordion} sx={{backgroundColor: '#f3f3f3', color: '#032133' , borderRadius: '8px', boxShadow: 'none',}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: '#5e7582'}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <span className={styles.AcordionBefore}></span> 
          <Typography sx={{fontSize: '14px', fontWeight: 500, textAlign: 'right'}}>اگر دکتر ساینا را به کسانی که قبال مشاوره دریافت کرده است معرفی کنم، باز هم به من کد تخفیف تعلق می گیرد؟</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{border: '1px solid #e8ebed', backgroundColor: '#fff', borderRadius: '8px', borderTopLeftRadius: '0', borderTopRightRadius: '0', borderTop: '0' }}>
          <Typography sx={{fontSize: '14px', color: '#5e7582', textAlign: 'right'}}>
              خیر، کد تخفیف فقط به کاربرانی تعلق میگیرد که برای اولین بار از دکتر ساینا مشاوره دریافت کنند .
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.Acordion} sx={{backgroundColor: '#f3f3f3', color: '#032133' , borderRadius: '8px', boxShadow: 'none',}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: '#5e7582'}}/>}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <span className={styles.AcordionBefore}></span>   
          <Typography sx={{fontSize: '14px', fontWeight: 500, textAlign: 'right'}}>تنها با ثبت نام کسانی که دکتر ساینا را به آنها معرفی کرده ام ، تخفیفی به من تعلق می گیرد؟</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{border: '1px solid #e8ebed', backgroundColor: '#fff', borderRadius: '8px', borderTopLeftRadius: '0', borderTopRightRadius: '0', borderTop: '0' }}>
          <Typography sx={{fontSize: '14px', color: '#5e7582', textAlign: 'right'}}>
              خیر. الزم است حتما توسط دیگران هزینه مشاوره پرداخت شود تا به شما تخفیف تعلق گیرد .
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}