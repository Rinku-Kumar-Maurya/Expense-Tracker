import React from 'react'

import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'
import useStyles from './styles'

const List = () => {
    const classes = useStyles();

    const transactions = [
        {id: 1, type: 'Expense', category: 'Salary', amount: '10', date: 'Mon Dec 20 2021'},
        {id: 2, type: 'Income', category: 'Pets', amount: '20', date: 'Mon Dec 20 2021'},
        {id: 3, type: 'Expense', category: 'Business', amount: '50', date: 'Mon Dec 20 2021'},
        {id: 4, type: 'Income', category: 'Salary', amount: '100', date: 'Mon Dec 20 2021'},
    ];

    return (
        <MUIList className={classes.list} dense={false}>
            {transactions.map((transaction) => (
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge='end' aria-label='delete' onClick=''>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List
