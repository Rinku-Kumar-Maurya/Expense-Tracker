import React from 'react'

import { Card, CardContent, CardHeader, Grid, Typography, Divider } from '@material-ui/core'

import Form from './Form/Form'
import List from './List/List'
import useStyles from './styles'

const Main = () => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography variant='h5' align='center'>Total Balance $1000</Typography>
                <Typography variant='subtitle1' style={{lineHeight: '1.3em', marginTop: '12px'}}>
                    {/* Info Card */}
                    Try saying: Add income for $20 in category Salary from next Sunday.
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
