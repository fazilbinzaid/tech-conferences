import React from 'react'
import { connect } from 'react-redux';
// import  ButtonAppBar from '../navbar/navbar';
import { fetchTableDataRequest } from '../../actions'

class Home extends React.Component{
  componentWillMount() {
    console.log('cwm initiated')
    this.props.dispatch(fetchTableDataRequest());
    console.log('cwm finished')
  };

  render(){
    const {tableData } = this.props;
    console.log(tableData);
    <div><h2>hii</h2></div>
    return
    
  }
}

const mapStateToProps = (state,ownProps) => ({
   tableData: state.tableReducer.tableData,
})

export default connect(
  mapStateToProps,
)(Home)
