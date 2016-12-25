import React, { PureComponent } from 'react';
import 'sass/core/table';

export default class Table extends PureComponent {
  static propTypes = {
    className: React.PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  constructor(props) {
    super(props);

    this.state = {
      draggableColumns: []
    };

    // this.onDragStart = this.onDragStart.bind(this);
    this.renderHead = this.renderHead.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.renderCells = this.renderCells.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  onDragStart(index, ev) {
    ev.dataTransfer.setData('text', index);
    console.log('onDragStart', {index, ev: ev.dataTransfer});
  }

  renderCells(content, isHead, rowIndex) {
    if (!content) return null;
    const {draggableColumns} = this.state;

    return React.Children.map(content, (cell, index) => {
      const {children, ...rest} = cell.props;
      if (isHead) {
        return (
          <th key={`th-${index}`} {...rest} onDragStart={this.onDragStart.bind(this, index)}>
            {children}
          </th>
        );
      }

      return (<td
          key={`td-${index}`}
          ref={draggableColumns.indexOf(`${index}`) > -1 ? `draggable-${index}` : false}>
          {children}
        </td>
      );
    });
  }

  renderRows(content, isHead) {
    content = content.props.children;
    if (!content) return null;

    return React.Children.map(content, (row, index) => {
      const cells = this.renderCells(row.props.children, isHead, index);
      return <tr key={`tr-${index}`}>{cells}</tr>;
    });
  }

  renderHead() {
    const {children} = this.props;
    return React.Children.map(children, (item, index) => {
      if (item.type === 'thead') {
        return this.renderRows(item, true);
      }
    });
  }

  renderItems() {
    const {children} = this.props;
    let tableHead = null;
    let tableBody = null;
    let tableFooter = null;
    let tableItems = null;

    React.Children.map(children, item => {
      switch (item.type) {
        case 'thead':
          tableHead = <thead key={'thead'}>{this.renderHead()}</thead>;
          break;
        case 'tbody':
          tableBody = <tbody key={'tbody'}>{this.renderRows(item)}</tbody>;
          break;
        case 'tfooter':
          tableFooter = item;
          break;
        default:
          tableItems = item;
          break;
      }
    });

    return [
      tableHead,
      tableBody,
      tableFooter,
      tableItems
    ];
  }

  componentWillMount() {
    const {children} = this.props;
    let {draggableColumns} = this.state;

    React.Children.map(children, item => {
      if (item.type === 'thead') {
        const rows = item.props.children;
        React.Children.map(rows, row => {
          const cells = row.props.children;
          React.Children.map(cells, (cell, index) => {
            if (cell.props.draggable) {
              draggableColumns.push(`${index}`);
            }
          });
        });
      }
    });

    console.log('componentWillMount draggableColumns', draggableColumns);
    this.setState({draggableColumns: draggableColumns});
  }

  render() {
    const {className, ...rest} = this.props;
    return (
      <table className={`table ${className}`} {...rest}>
        {this.renderItems()}
      </table>
    );
  }
}
