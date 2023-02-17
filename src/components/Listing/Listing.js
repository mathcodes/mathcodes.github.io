// // // import React, { Component } from 'react';

// // // class Listing extends Component {
// // //   constructor(props) {
// // //     super(props)
// // //     this.state = {
// // //       records: []
// // //     }
// // //   }

// // //   componentDidMount() {
// // //     fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=30f3274cbfe143059c9b4053147fba68&includeNutrition=true')
// // //       .then(response => response.json())
// // //       .then(records => {
// // //         console.log(records)
// // //         this.setState({
// // //           records: records.results
// // //         })
// // //       })
// // //       .catch(error => console.log(error))
// // //   }
// // //   renderListing() {
// // //     let recordList = []
// // //     this.state.records.map(record => {
// // //       return recordList.push(<li key={record.id}>{record.title}</li>)
// // //     })
// // //     return recordList;
// // //   }

// // //   render() {
// // //     return (
// // //       <ul>
// // //         {this.renderListing()}
// // //       </ul>
// // //     );
// // //   }
// // // }

// // // export default Listing;

// // // convert the class component above to a functional component
// // import React, { useState, useEffect } from 'react';

// // function Listing() {

// //   const [records, setRecords] = useState([])

// //   useEffect(() => {
// //     fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=30f3274cbfe143059c9b4053147fba68&includeNutrition=true')
// //       .then(response => response.json())
// //       .then(records => {
// //         console.log(records)
// //         setRecords(records.results)
// //       })
// //       .catch(error => console.log(error))
// //   }, [])

// //   return (
// //     <ul>
// //       {records.map(record => <li key={record.id}>{record.title}</li>)}
// //     </ul>
// //   );
// // }

// // export default Listing;

// // recreate the above functional component using the useReducer hook and useContext hook
import React, { useReducer, useEffect, createContext } from 'react';

const initialState = {
  records: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_RECORDS':
      return {
        ...state,
        records: action.payload
      }
    default:
      return state
  }
}

export const RecordsContext = createContext(initialState)

export default function Listing() {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=30f3274cbfe143059c9b4053147fba68&includeNutrition=true')
      .then(response => response.json())
      .then(records => {
        console.log(records)
        dispatch({
          type: 'SET_RECORDS',
          payload: records.results
        })
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <RecordsContext.Provider value={{ state, dispatch }}>
      <ul>
        {state.records.map(record => <li key={record.id}>{record.title}</li>)}
      </ul>
    </RecordsContext.Provider>
  );
}

