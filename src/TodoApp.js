import React from 'react';
import Card from '@material-ui/core/Card';
import DatePicker from 'react-datepicker';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card raised="true">
                <TextField
        label="Description"
        id="margin-none"
        margin="normal"
      />
           <br/>
        <TextField
        label="Priority"
        id="margin-none"
        margin="normal"
      />
      <br/>
      <br/>
                <DatePicker selected={this.props.dueDate}/>
                <br/>
                <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                            >
                                Create
                            </Button>
            </Card>
        );
    }

}