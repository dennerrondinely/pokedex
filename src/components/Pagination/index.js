/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { KeyboardArrowLeft } from '@styled-icons/material/KeyboardArrowLeft';
import { KeyboardArrowRight } from '@styled-icons/material/KeyboardArrowRight';

import getPagination from '../../utils/getPagination';

import { Container, Button, Previous, Next } from './styles';

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  show,
}) {
  const [pagination, setPaginatio] = useState([]);
  const [select, setSelect] = useState(1);
  const pageNumbers = Math.ceil(totalPosts / postsPerPage);

  useEffect(() => {
    const pages = getPagination(2, pageNumbers);
    setPaginatio(pages);
  }, [pageNumbers]);

  function handlePagination(number) {
    const pages = getPagination(number, pageNumbers);
    setPaginatio(pages);
    setSelect(number);
    paginate(number);
  }

  function handlePrevious() {
    const previous = select - 1;
    if (previous >= 1) handlePagination(previous);
  }

  function handleNext() {
    const next = select + 1;
    if (next <= pagination[pagination.length - 1]) handlePagination(next);
  }

  return (
    <>
      {pageNumbers > 1 && show && (
        <Container>
          <Previous onClick={handlePrevious} active={select > 1}>
            <KeyboardArrowLeft size={20} />
          </Previous>
          <div>
            {pagination.map(
              (number, i) =>
                number && (
                  <Button
                    key={i}
                    type="button"
                    select={number === select}
                    onClick={() => number !== '...' && handlePagination(number)}
                  >
                    {number}
                  </Button>
                )
            )}
          </div>
          <Next
            active={select < pagination[pagination.length - 1]}
            onClick={handleNext}
          >
            <KeyboardArrowRight size={20} />
          </Next>
        </Container>
      )}
    </>
  );
}

Pagination.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
