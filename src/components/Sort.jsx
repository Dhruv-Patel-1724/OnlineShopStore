import React from 'react'
import styled from 'styled-components';
import { BsFillGridFill, BsList  } from "react-icons/bs";
import { useFilterContext } from '../Context/FilterContext';

const Sort = () => {
  const {grid_view, setGrid_View, sorting, setList_View, filter_products} = useFilterContext()
  return (
    <Wrapper className="sort-section">
      {/* 1st column */}
      <div className="sorting-list--grid">

<button className={grid_view ? "active sort-btn" :"sort-btn"}
  onClick={setGrid_View } type="button">
   <BsFillGridFill className="icon"/>
</button>

<button className={!grid_view ? "active sort-btn" :"sort-btn"}
  onClick={setList_View } type="button">
  <BsList className="icon"/>
</button>



  <span className={`switch ${grid_view ? "left" : "right"}`} />

</div>
{/* 2nd column */}
      <div className="product-data">
<p>
  {`${filter_products.length}Products Available`}
</p>
      </div>

      <div className="sort-selection"
>
        <form action= "#">
          <label htmlFor='sort'>
            <select name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={sorting}>
              <option value = "lowest"> Price(lowest)</option>
 {/* <option value="#" disabled ></option> */}
               <option value = "a-z"> Price(a-z)</option>
{/* <option value="#" disabled ></option> */}
                <option value = "highest"> Price(highest)</option>
{/* <option value="#" disabled ></option> */}
                  <option value = "z-a"> Price(z-a)</option>
            </select>
          </label>
        </form>

      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;



  .sorting-list--grid {
  position: relative;
  display: flex;
  background: #e5e7eb;
  padding: 6px;
  border-radius: 30px;
  width: 120px;
  justify-content: space-between;
}

.sort-btn {
  position: relative;
  z-index: 2;
  flex: 1;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sort-btn .icon {
  font-size: 1.6rem;
  color: #6b7280;
  transition: color 0.3s ease;
}

/* active icon color */
.sort-btn.active .icon {
  color: #fff;
}

/* sliding switch */
.switch {
  position: absolute;
  top: 6px;
  left: 6px;
  width: calc(50% - 6px);
  height: calc(100% - 12px);
  background: ${({ theme }) => theme.colors.black};
  border-radius: 24px;
  transition: transform 0.3s ease;
  z-index: 1;
}

/* move switch */
.switch.right {
  transform: translateX(100%);
}




  .sort-selection {
  display: flex;
  align-items: center;
}

.sort-selection label {
  font-size: 1.4rem;
  font-weight: 500;
  color: #374151;
}

.sort-selection--style {
  margin-left: 0.8rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.3rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color: #f9fafb;
  color: #111827;
  cursor: pointer;
  outline: none;
  transition: all 0.25s ease;
}

/* hover effect */
.sort-selection--style:hover {
  border-color: #000;
  background-color: #fff;
}

/* focus effect */
.sort-selection--style:focus {
  border-color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 0 0 2px rgba(0,0,0,0.15);
}

/* option styling */
.sort-selection--style option {
  padding: 10px;
  font-size: 1.3rem;
}

`;


export default Sort;
