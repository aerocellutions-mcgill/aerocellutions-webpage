import { useEffect, useRef, useState } from 'react';
import MapNA from '../assets/blankmapCAUS.png';
import './OilSpillMap.css';

const oilSpills = [
  {
    id: 'deepwater-horizon',
    name: 'Deepwater Horizon',
    year: '2010',
    location: 'Gulf of Mexico',
    country: 'US',
    volume: '~507 million L',
    product: 'Crude oil (unrefined petroleum)',
    impact: 'The largest offshore oil spill in U.S. history, affecting Gulf ecosystems and shorelines across several states.',
    x: 67,
    y: 91,
    source: 'https://darrp.noaa.gov/oil-spills/deepwater-horizon',
  },
  {
    id: 'exxon-valdez',
    name: 'Exxon Valdez',
    year: '1989',
    location: 'Prince William Sound, Alaska',
    country: 'US',
    volume: '~41.6 million L',
    product: 'Crude oil (unrefined petroleum)',
    impact: 'A tanker grounding oiled more than 1,300 miles of shoreline in a sensitive coastal ecosystem.',
    x: 34,
    y: 27,
    source: 'https://darrp.noaa.gov/oil-spills/exxon-valdez',
  },
  {
    id: 'santa-barbara',
    name: 'Santa Barbara',
    year: '1969',
    location: 'Santa Barbara Channel, California',
    country: 'US',
    volume: '~15.9 million L',
    product: 'Crude oil (unrefined petroleum)',
    impact: 'A platform blowout that helped catalyze modern environmental policy and public awareness around offshore drilling risk.',
    x: 46,
    y: 80,
    source: 'https://incidentnews.noaa.gov/incident/6206',
  },
  {
    id: 'kalamazoo-river',
    name: 'Kalamazoo River',
    year: '2010',
    location: 'Marshall, Michigan',
    country: 'US',
    volume: '~3.2 million L',
    product: 'Diluted bitumen (heavy crude thinned for pipelines)',
    impact: 'A ruptured pipeline sent oil into Talmadge Creek and the Kalamazoo River, requiring years of cleanup.',
    x: 67,
    y: 72,
    source: 'https://www.epa.gov/enbridge-spill-michigan/enbridge-spill-response-timeline',
  },
  {
    id: 'north-cape',
    name: 'North Cape',
    year: '1996',
    location: 'Block Island Sound, Rhode Island',
    country: 'US',
    volume: '~3.1 million L',
    product: 'Heating oil (diesel-like No. 2 fuel oil)',
    impact: 'A winter grounding spread oil through Block Island Sound and caused major losses to marine life and fisheries.',
    x: 82,
    y: 69,
    source: 'https://darrp.noaa.gov/oil-spills/north-cape',
  },
  {
    id: 'buzzards-bay',
    name: 'Buzzards Bay',
    year: '2003',
    location: 'Massachusetts',
    country: 'US',
    volume: '~371,000 L',
    product: 'Heavy fuel oil (No. 6; thick residual fuel)',
    impact: 'A barge grounding oiled marshes, beaches, shellfish beds, and bird habitat along the Massachusetts coast.',
    x: 81,
    y: 68,
    source: 'https://darrp.noaa.gov/oil-spills/bouchard-barge-120',
  },
  {
    id: 'mayflower',
    name: 'Mayflower',
    year: '2013',
    location: 'Mayflower, Arkansas',
    country: 'US',
    volume: '~507,000 L',
    product: 'Heavy crude oil (thick crude transported by pipeline)',
    impact: 'A pipeline rupture released crude oil through a residential area and into nearby waterways.',
    x: 66,
    y: 82,
    source: 'https://www.epa.gov/enforcement/exxonmobil-mayflower-clean-water-settlement',
  },
  {
    id: 'lakeview-gusher',
    name: 'Lakeview Gusher',
    year: '1910',
    location: 'Kern County, California',
    country: 'US',
    volume: '~1.43 billion L',
    product: 'Crude oil (unrefined petroleum)',
    impact: 'The uncontrolled well blowout produced about nine million barrels of oil, making the litre total unusually large but historically accurate.',
    x: 47,
    y: 78,
    source: 'https://ohp.parks.ca.gov/ListedResources/Detail/485',
  },
  {
    id: 'arrow',
    name: 'S.S. Arrow',
    year: '1970',
    location: 'Chedabucto Bay, Nova Scotia',
    country: 'Canada',
    volume: '~12.2-13.1 million L',
    product: 'Bunker C fuel oil (very heavy ship/industrial fuel)',
    impact: 'One of Canada’s major early marine spills, oiling hundreds of kilometres of shoreline.',
    x: 88,
    y: 61,
    source: 'https://incidentnews.noaa.gov/incident/6208',
  },
  {
    id: 'nestucca',
    name: 'Nestucca',
    year: '1988',
    location: 'Washington coast and Vancouver Island',
    country: 'Canada',
    volume: '875,000 L',
    product: 'Bunker C fuel oil (very heavy ship/industrial fuel)',
    impact: 'A barge spill near Washington drifted north and heavily oiled seabirds and beaches along Vancouver Island.',
    x: 43,
    y: 54,
    source: 'https://publications.gc.ca/site/eng/9.857437/publication.html',
  },
  {
    id: 'wabamun-lake',
    name: 'Lake Wabamun',
    year: '2005',
    location: 'Wabamun, Alberta',
    country: 'Canada',
    volume: '712,000 L',
    product: 'Bunker C fuel oil (very heavy ship/industrial fuel)',
    impact: 'A rail derailment released heavy oil near the lake, affecting shoreline, aquatic vegetation, and surrounding communities.',
    x: 52,
    y: 50,
    source: 'https://www.canada.ca/en/environment-climate-change/services/water-overview/protecting-freshwater/field-guide-oil-spill-response-freshwater-shorelines/chapter-9.html',
  },
  {
    id: 'north-saskatchewan',
    name: 'North Saskatchewan River',
    year: '2016',
    location: 'Maidstone, Saskatchewan',
    country: 'Canada',
    volume: '225,000 L',
    product: 'Blended heavy crude oil (heavy crude plus thinning solvent)',
    impact: 'A pipeline release sent oil into the North Saskatchewan River, affecting water intakes and downstream communities.',
    x: 57,
    y: 56,
    source: 'https://www.canada.ca/en/environment-climate-change/services/environmental-enforcement/notifications/husky-oil-operations-limited-fined-for-federal-offences.html',
  },
  {
    id: 'lac-megantic',
    name: 'Lac-Megantic',
    year: '2013',
    location: 'Quebec',
    country: 'Canada',
    volume: '~6 million L',
    product: 'Crude oil (unrefined petroleum)',
    impact: 'A rail disaster released crude oil into the town centre, contaminating soil, Mégantic Lake, and the Chaudière River.',
    x: 81,
    y: 64,
    source: 'https://www.tsb.gc.ca/eng/rapports-reports/rail/2013/r13d0054/r13d0054.html',
  },
];

export default function OilSpillMap() {
  const [activeId, setActiveId] = useState(oilSpills[0].id);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const dragRef = useRef(null);
  const pointersRef = useRef(new Map());
  const pinchRef = useRef(null);
  const activeSpill = oilSpills.find((spill) => spill.id === activeId) || oilSpills[0];

  function clampPan(nextPan, nextScale = scale) {
    const stage = stageRef.current;
    const canvas = canvasRef.current;

    if (!stage || !canvas) {
      return nextPan;
    }

    const stageWidth = stage.clientWidth;
    const stageHeight = stage.clientHeight;
    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;
    const scaledWidth = canvasWidth * nextScale;
    const scaledHeight = canvasHeight * nextScale;
    const xScaleOffset = (scaledWidth - canvasWidth) / 2;
    const yScaleOffset = (scaledHeight - canvasHeight) / 2;
    const minX = stageWidth - canvas.offsetLeft + xScaleOffset - scaledWidth;
    const maxX = xScaleOffset - canvas.offsetLeft;
    const minY = stageHeight - canvas.offsetTop + yScaleOffset - scaledHeight;
    const maxY = yScaleOffset - canvas.offsetTop;

    return {
      x: Math.max(minX, Math.min(maxX, nextPan.x)),
      y: Math.max(minY, Math.min(maxY, nextPan.y)),
    };
  }

  function clampScale(nextScale) {
    return Math.max(1, Math.min(2.6, nextScale));
  }

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) {
      return undefined;
    }

    function handleNativeWheel(event) {
      event.preventDefault();
      event.stopPropagation();

      const zoomDirection = event.deltaY > 0 ? -1 : 1;

      setScale((currentScale) => {
        const nextScale = clampScale(currentScale + zoomDirection * 0.12);
        setPan((currentPan) => clampPan(currentPan, nextScale));
        return nextScale;
      });
    }

    function stopPageGesture(event) {
      event.preventDefault();
      event.stopPropagation();
    }

    stage.addEventListener('wheel', handleNativeWheel, { passive: false });
    stage.addEventListener('gesturestart', stopPageGesture, { passive: false });
    stage.addEventListener('gesturechange', stopPageGesture, { passive: false });
    stage.addEventListener('gestureend', stopPageGesture, { passive: false });

    return () => {
      stage.removeEventListener('wheel', handleNativeWheel);
      stage.removeEventListener('gesturestart', stopPageGesture);
      stage.removeEventListener('gesturechange', stopPageGesture);
      stage.removeEventListener('gestureend', stopPageGesture);
    };
  });

  function handlePointerDown(event) {
    if (event.target.closest('.oil-spill-map__marker')) {
      return;
    }

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    pointersRef.current.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
    });

    if (pointersRef.current.size === 2) {
      const [first, second] = [...pointersRef.current.values()];
      pinchRef.current = {
        distance: Math.hypot(second.x - first.x, second.y - first.y),
        scale,
      };
      dragRef.current = null;
      return;
    }

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      panX: pan.x,
      panY: pan.y,
    };
  }

  function handlePointerMove(event) {
    if (pointersRef.current.has(event.pointerId)) {
      pointersRef.current.set(event.pointerId, {
        x: event.clientX,
        y: event.clientY,
      });
    }

    if (pinchRef.current && pointersRef.current.size >= 2) {
      event.preventDefault();
      const [first, second] = [...pointersRef.current.values()];
      const currentDistance = Math.hypot(second.x - first.x, second.y - first.y);
      const nextScale = clampScale((pinchRef.current.scale * currentDistance) / pinchRef.current.distance);
      setScale(nextScale);
      setPan((currentPan) => clampPan(currentPan, nextScale));
      return;
    }

    if (!dragRef.current || dragRef.current.pointerId !== event.pointerId) {
      return;
    }

    event.preventDefault();
    const nextX = dragRef.current.panX + event.clientX - dragRef.current.startX;
    const nextY = dragRef.current.panY + event.clientY - dragRef.current.startY;

    setPan(clampPan({ x: nextX, y: nextY }));
  }

  function stopDrag(event) {
    pointersRef.current.delete(event.pointerId);
    pinchRef.current = null;

    if (dragRef.current?.pointerId === event.pointerId) {
      dragRef.current = null;
    }
  }

  return (
    <div className="oil-spill-map">
      <div
        ref={stageRef}
        className="oil-spill-map__stage"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        role="application"
        aria-label="Draggable oil spill map"
      >
        <div
          ref={canvasRef}
          className="oil-spill-map__canvas"
          style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})` }}
        >
          <img src={MapNA} alt="Map of the United States and Canada" />
          {oilSpills.map((spill) => (
            <button
              key={spill.id}
              type="button"
              className={`oil-spill-map__marker ${spill.country === 'Canada' ? 'is-canada' : 'is-us'} ${activeSpill.id === spill.id ? 'is-active' : ''}`}
              style={{ left: `${spill.x}%`, top: `${spill.y}%` }}
              onClick={() => setActiveId(spill.id)}
              aria-label={`${spill.name}, ${spill.location}`}
              aria-pressed={activeSpill.id === spill.id}
            >
              <span>{spill.year}</span>
            </button>
          ))}
        </div>
      </div>

      <article className="oil-spill-map__details">
        <div>
          <span>{activeSpill.country}</span>
          <h5>{activeSpill.name}</h5>
          <p>{activeSpill.location}</p>
        </div>
        <dl>
          <div>
            <dt>Year</dt>
            <dd>{activeSpill.year}</dd>
          </div>
          <div>
            <dt>Oil</dt>
            <dd>{activeSpill.product}</dd>
          </div>
          <div>
            <dt>Volume</dt>
            <dd>{activeSpill.volume}</dd>
          </div>
        </dl>
        <p>{activeSpill.impact}</p>
        <a href={activeSpill.source} target="_blank" rel="noreferrer">
          Source
        </a>
      </article>
    </div>
  );
}
