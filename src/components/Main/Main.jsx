import React, { useContext } from 'react'

import { Card, CardContent, CardHeader, Grid, Typography, Divider } from '@material-ui/core'

import Form from './Form/Form'
import List from './List/List'
import useStyles from './styles'
import { ExpenseTrackerContext } from '../../context/context'
import InfoCard from '../InfoCard'

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography variant='h5' align='center'>Total Balance ₹{balance}</Typography>
                <Typography variant='subtitle1' style={{ lineHeight: '1.3em', marginTop: '12px' }}>
                    <InfoCard />
                </Typography>
                <Divider className={classes.divider} />
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
