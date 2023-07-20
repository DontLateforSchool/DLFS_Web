import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import busIcon_red from '../../image/bus_red.png';
import busIcon_yellow from '../../image/bus_yellow.png';
import busIcon_green from '../../image/bus_green.png';
import busStopIcon1 from '../../image/busStopIcon1.png';
import busStopIcon2 from '../../image/busStopIcon2.png';
import busStopIcon3 from '../../image/busStopIcon3.png';
import refreshIcon from '../../image/refresh.png';

const Bus = () => {
  const [loading, setLoading] = useState(false);
  const [stopData, setStopData] = useState([]);
  const [timeData, setTimeData] = useState({});
  const [spin, setSpin] = useState(false);

  function fetchStopData() {
    fetch('/busInfo')
      .then((res) => res.json())
      .then((res) => setStopData(res))
      .catch((e) => console.log(e));
  }

  function fetchTimeData() {
    const timeList = [
      209030102, 177710503, 177700101, 178920201, 178660201, 178900101,
      220410101, 220390101, 178900102, 178900103, 178910201, 504500000,
      177690203, 177700204, 177710402,
    ]; // 정류장번호 넣기
    let result = {};
    timeList.forEach((item, _) => {
      fetch(`/arriveInfo?busStopId=${item}`)
        .then((res) => res.json())
        .then((res) => (result[res[0].sequenceNumber] = res[0]))
        .catch((e) => console.log(e));
    });
    setTimeData({});
    setTimeData(result);
  }

  const updateData = () => {
    // api 만들어지면 데이터 받아와서 data상태에 저장하는 함수
    console.log('새로고침');
    setLoading(true);
    setSpin(true);
    let timer = setTimeout(() => {
      setLoading(false);
      setSpin(false);
    }, 1000);
    fetchTimeData();
    fetchStopData();
    return () => {
      clearTimeout(timer);
    };
  };

  useEffect(() => {
    updateData();
  }, []);

  const innerHeight = window.innerHeight - 250;

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: innerHeight,
          }}
        >
          <CircularProgress color='inherit' />
        </div>
      ) : (
        <>
          {stopData.map((item, idx) => {
            let img = busStopIcon2;
            const checkData =
              timeData[item.busStopIdx] === undefined ||
              timeData[item.busStopIdx].remainingFirstTime === null;
            if (item.vehicleNumber !== null) {
              if (item.congestion === '여유') {
                img = busIcon_green;
              } else if (item.congestion === '보통') {
                img = busIcon_yellow;
              } else if (
                item.congestion === '혼잡' ||
                item.congestion === '만차'
              ) {
                img = busIcon_red;
              } else {
                img = busStopIcon2;
              }
            }
            if (idx === stopData.length - 1) {
              return (
                <div
                  style={{ display: 'flex', alignItems: 'center' }}
                  key={'stop' + idx}
                >
                  <img src={img} width={25} height={25} />
                  <h3 style={{ marginLeft: 20 }}>
                    {item.busStopName}
                    <br />
                    <span style={{ fontSize: 14, color: 'gray' }}>
                      {checkData
                        ? '도착정보가 없습니다.'
                        : `${timeData[item.busStopIdx].remainingFirstTime}분(
                      ${
                        timeData[item.busStopIdx]?.remainingFirstStops
                      }정류장 전)`}
                    </span>
                  </h3>
                </div>
              );
            }
            return (
              <>
                <div
                  style={{ display: 'flex', alignItems: 'center' }}
                  key={'stop' + idx}
                >
                  <img src={img} width={25} height={25} />
                  <h3 style={{ marginLeft: 20 }}>
                    {item.busStopName}
                    <br />
                    <span style={{ fontSize: 14, color: 'grey' }}>
                      {checkData
                        ? '도착 정보가 없습니다.'
                        : `${timeData[item.busStopIdx].remainingFirstTime}분 (${
                            timeData[item.busStopIdx]?.remainingFirstStops
                          }정류장 전)`}
                    </span>
                  </h3>
                </div>
                <img
                  src={busStopIcon3}
                  height={40}
                  style={{ marginLeft: 11.5 }}
                  key={'term' + idx}
                />
              </>
            );
          })}
        </>
      )}
      <img
        src={refreshIcon}
        className={`refresh ${spin ? 'spin' : ''}`}
        height={60}
        width={60}
        style={{ position: 'fixed', bottom: 70, right: 20 }}
        // onClick={updateData}
        onClick={() => {
          updateData();
        }}
      />
    </div>
  );
};

export default Bus;
