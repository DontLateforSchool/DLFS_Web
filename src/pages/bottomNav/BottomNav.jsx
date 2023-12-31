import React, { useState } from 'react';
import './BottomNav.css';
import { Link } from 'react-router-dom';
// 사용할 아이콘 import
import './FontAwesome';
// FontAwesomIcon 컴포넌트를 사용하기 위해 import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BottomNav = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className='wrapper'>
      {/* 하단 네비게이션 최상위 태그 */}
      <Link to='/' className='nav-link' onClick={() => setActiveNav(1)}>
        <div>
          <FontAwesomeIcon
            icon='home'
            className={activeNav === 1 ? 'nav-item active' : 'nav-item'}
          />
          {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
        </div>
      </Link>
      <Link to='/day' className='nav-link' onClick={() => setActiveNav(2)}>
        <div>
          <FontAwesomeIcon
            icon='compass'
            className={activeNav === 2 ? 'nav-item active' : 'nav-item'}
          />
        </div>
      </Link>
      <Link to='/board' className='nav-link' onClick={() => setActiveNav(5)}>
        <div>
          <FontAwesomeIcon
            icon='pencil'
            className={activeNav === 5 ? 'nav-item active' : 'nav-item'}
          />
        </div>
      </Link>
    </nav>
  );
};

export default BottomNav;
