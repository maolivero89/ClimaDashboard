import * as React from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';




export default function VerticalSlider() {
    return (
        <Slider
            sx={{
                '& input[type="range"]': {
                    WebkitAppearance: 'slider-vertical',
                },
            }}
            orientation="vertical"
            defaultValue={30}
            aria-label="Temperature"
            valueLabelDisplay="auto"
           
        />
    );
} 