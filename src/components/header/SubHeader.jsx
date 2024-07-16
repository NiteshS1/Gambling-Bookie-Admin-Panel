import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function SubHeader() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex justify-between bg-white font-bold px-20'>
      <div className='flex justify-evenly'>
        <ul className='flex justify-evenly cursor-pointer space-x-4' ref={dropdownRef}>
          <NavItem to="/dashboard">Dashboard</NavItem>
          {/* <NavItem to="/downline-list">Downline List</NavItem> */}
          <DropdownItem
            label="Downline List"
            isOpen={openDropdown === 'downline'}
            toggle={() => toggleDropdown('downline')}
          >
            <NavItem to="/user-downline">User Downline List</NavItem>
            <NavItem to="/master-downline">Master Downline List</NavItem>
          </DropdownItem>
          <NavItem to="/my-account">My Account</NavItem>
          <DropdownItem
            label="My Report"
            isOpen={openDropdown === 'myReport'}
            toggle={() => toggleDropdown('myReport')}
          >
            <NavItem to="/event">Event Profit/Loss</NavItem>
            <NavItem to="/downline">Downline Profit/Loss</NavItem>
          </DropdownItem>
          <NavItem to="/betlist">BetList</NavItem>
          <NavItem to="/market-analysis">Market Analysis</NavItem>
          <DropdownItem
            label="Banking"
            isOpen={openDropdown === 'banking'}
            toggle={() => toggleDropdown('banking')}
          >
            <NavItem to="/user">User Banking</NavItem>
            <NavItem to="/master">Master Banking</NavItem>
          </DropdownItem>
          <NavItem to="/commission">Commission</NavItem>
          <NavItem to="/password-history">Password History</NavItem>
          <NavItem to="/restore-user">Restore User</NavItem>
        </ul>
      </div>
      <div>
        <button to="/logout">Logout</button>
      </div>
    </div>
  );
}

function NavItem({ to, children }) {
  return (
    <li className='hover:underline border-r border-gray-500 pr-2'>
      <Link to={to}>{children}</Link>
    </li>
  );
}

function DropdownItem({ label, isOpen, toggle, children }) {
  return (
    <li className='relative'>
      <button onClick={toggle} className='hover:underline focus:outline-none'>
        {label}
      </button>
      {isOpen && (
        <ul className='absolute bg-green-800 text-white shadow-lg p-2'>
          {children}
        </ul>
      )}
    </li>
  );
}

export default SubHeader;
