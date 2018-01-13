import React, { PureComponent } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Page from '../Page';
import Cart from '../Cart';
import FormDelivery from '../FormDelivery';
export default class PageCart extends PureComponent{
render(){
    return(
        <Page>
        <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
<Cart/>
      </Grid.Column>
      <Grid.Column width={8}>
        <FormDelivery/>
      </Grid.Column>

    </Grid.Row>
  </Grid>
  </Page>
    )
}
}