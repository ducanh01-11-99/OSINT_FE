import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import flagEnglish from './image/en.svg';
import flagVietNam from './image/vn.svg';

import { makeSelectLocale } from './selectors';
import { changeLocale } from './actions';
import { IconStyled, Wrapper } from './styles';

const items = [
  {
    label: 'Tiếng Việt',
    key: 'vi',
    icon: (
      <IconStyled style={{ width: '30px', height: '30px' }} src={flagVietNam} />
    ),
  },
  {
    label: 'English',
    key: 'en',
    icon: (
      <IconStyled style={{ width: '30px', height: '30px' }} src={flagEnglish} />
    ),
  },
];

// const {Option} = Select;

export function setLangLocalStorage(lang) {
  window.localStorage.setItem(LANG, lang);
}

const LANG = 'lang';

export function getLangLocalStorage() {
  return JSON.parse(window.localStorage.getItem(LANG));
}

function LanguageProvider() {
  const dispatch = useDispatch();
  const locale = useSelector(makeSelectLocale());
  const [lang, setLang] = useState(locale);
  const onChangLanguage = value => {
    // console.log('valueKey', value.key)
    setLang(value.key);
    // i18next.changeLanguage(value);
    // eslint-disable-next-line consistent-return
    i18next.changeLanguage(value.key, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
      t('key'); // -> same as i18next.t
    });
    setLangLocalStorage(value.key);
    dispatch(changeLocale(value.key));
  };
  const menuProps = {
    items,
    onClick: onChangLanguage,
  };
  useEffect(() => {
    setLang(locale);
  }, [locale]);

  // eslint-disable-next-line no-unused-vars
  return (
    <Wrapper
      menu={menuProps}
      trigger={['click']}
      placement="bottomRight"
      style={{ backgroundColor: '#000' }}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={e => e.preventDefault()}>
        <div style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
          {lang === 'en' ? (
            <IconStyled
              style={{ width: '40px', height: '40px' }}
              src={flagEnglish}
            />
          ) : (
            <IconStyled
              style={{ width: '40px', height: '40px' }}
              src={flagVietNam}
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default LanguageProvider;
