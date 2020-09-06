import React from 'react'
import { FilterTypes } from '../store';
import { Stack, Text, TextField, PrimaryButton, Pivot, PivotItem } from '@fluentui/react';
import { connect } from 'react-redux';
import { actions } from '../actions';

interface ITodoHeaderProps {
  addTodo: (label: string | undefined) => void;
  setFilter: (filter: FilterTypes) => void;
}

interface ITodoHeaderState {
  labelInput: string | undefined;
}

class TodoHeader extends React.Component<ITodoHeaderProps, ITodoHeaderState> {
  constructor(props: ITodoHeaderProps) {
    super(props);
    this.state = { labelInput: '' };
  }

  render() {
    return (
      <Stack gap={10}>
        <Stack horizontal horizontalAlign="center">
          <Text variant="xxLarge">Todos
            <span role="img" aria-label="coca">🥤</span>
          </Text>
        </Stack>
        <Stack horizontal gap={10}>
          <Stack.Item grow>
            <TextField
              placeholder="What needs to be done?"
              value={this.state.labelInput}
              onChange={this.onChange}
              styles={props => ({
                ...(props.focused && {
                  field: {
                    backgroundColor: '#c7e0f4'
                  }
                })
              })}
            />
          </Stack.Item>
          <PrimaryButton onClick={this.onAdd}>Add</PrimaryButton>
        </Stack>
        <Pivot onLinkClick={this.onFilter}>
          <PivotItem headerText="all" />
          <PivotItem headerText="active" />
          <PivotItem headerText="completed" />
        </Pivot>
      </Stack>
    )
  }

  private onAdd = () => {
    this.props.addTodo(this.state.labelInput);
    this.setState({ labelInput: '' });
  };

  private onChange = (evt: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue: string | undefined) => {
    this.setState({ labelInput: newValue });
  };

  private onFilter = (item: PivotItem | undefined) => {
    // this.props.setFilter(item.props.headerText as FilterTypes);
  };
}

const ConnectedTodoHeader = connect(
  state => ({}),
  dispatch => ({
    addTodo: (label: any) => dispatch(actions.addTodo(label)),
    setFilter: (filter: string) => dispatch(actions.setFilter(filter))
  })
)(TodoHeader);

export { ConnectedTodoHeader as TodoHeader };
