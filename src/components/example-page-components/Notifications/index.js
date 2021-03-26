import React, { Fragment } from 'react';

import { PageTitle } from '../../../components/layout-components';

import { WrapperSimple } from '../../../components/layout-components';
import NotificationsToasts from '../../../components/example-components/Notifications/NotificationsToasts';
import NotificationsAlertsBasic from '../../../components/example-components/Notifications/NotificationsAlertsBasic';
import NotificationsAlertsDismissible from
  '../../../components/example-components/Notifications/NotificationsAlertsDismissible';

const Notifications = () =>
  <Fragment>
    <PageTitle
      titleHeading="Notifications"
      titleDescription="Show beautiful, animated growl like notifications or alerts on your pages screens."
    />

    <WrapperSimple sectionHeading="Basic alerts">
      <NotificationsAlertsBasic />
    </WrapperSimple>

    <WrapperSimple sectionHeading="Alerts dismissible">
      <NotificationsAlertsDismissible />
    </WrapperSimple>

    <WrapperSimple sectionHeading="Toasts">
      <NotificationsToasts />
    </WrapperSimple>
  </Fragment>;

export default Notifications;
