import React, { Component } from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

import "@formatjs/intl-pluralrules/polyfill";
import "@formatjs/intl-pluralrules/locale-data/en";
import "@formatjs/intl-pluralrules/locale-data/vi";

import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/locale-data/en";
import "@formatjs/intl-relativetimeformat/locale-data/vi";
import vi from "./transalate/vi.json";
import en from "./transalate/en.json";

// const locale = vi;
// const messages = vi;

// const locale = this.props.ngongu;
// const messages = this.props.ngongu;

class DoiNgonNgu extends Component {
  render() {
    let ngonngu = this.props.ngonngu;
    let locale = ngonngu === "en" ? en : vi;
    let messages = ngonngu === "en" ? en : vi;
    console.log(this.props.ngonngu);
    return (
      <IntlProvider locale={locale} messages={messages} defaultLocale="vi">
        {this.props.children}
      </IntlProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ngonngu: state.counter.ngonngu,
  };
};

export default connect(mapStateToProps, null)(DoiNgonNgu);
