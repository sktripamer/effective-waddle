import * as React from "react";
import SearchSystem from '../components/SearchSystem';
import pageQuery from '../components/SearchSystem';

export default function SearchPage() {
  return (
    <SearchSystem data={pageQuery}/>
  );
}
