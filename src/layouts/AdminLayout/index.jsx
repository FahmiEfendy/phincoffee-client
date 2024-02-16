import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLocale, selectTheme } from '@containers/App/selectors';
import Sidebar from '@components/Sidebar';
import Navbar from '@components/Navbar';

import classes from './style.module.scss';

const AdminLayout = ({ children, locale, theme, intl: { formatMessage } }) => (
  <div>
    <Sidebar />
    <Navbar title={formatMessage({ id: 'app_title_header' })} locale={locale} theme={theme} />
    <div className={classes.layout}>{children}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  locale: selectLocale,
  theme: selectTheme,
});

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired,
  locale: PropTypes.string,
  theme: PropTypes.string,
  intl: PropTypes.object,
};

export default injectIntl(connect(mapStateToProps)(AdminLayout));
