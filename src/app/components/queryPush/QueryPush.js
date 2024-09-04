'use client';

import { useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';

const QueryPush = () => {
    const searchParams = useSearchParams(); // Access current query parameters
    const pathname = usePathname(); // Access current pathname

    // Options for radio buttons and checkboxes
    const techOptions = ['HTML', 'CSS', 'JS'];
    const courseOptions = ['PS', 'CS', 'MS'];
    const countryOptions = ['US', 'UK', 'IND', 'JP', 'AUS'];

    const updateQueryParam = (key, value) => {
        const params = new URLSearchParams(searchParams.toString());
        if (Array.isArray(value)) {
            params.delete(key); // Remove all existing values for the key
            value.forEach((val) => params.append(key, val)); // Add new values
        } else {
            if (value) {
                params.set(key, value);
            } else {
                params.delete(key);
            }
        }
        window.history.pushState(null, '', `${pathname}?${params.toString()}`);
    };

    const handleTechChange = (event) => {
        const value = event.target.value;
        updateQueryParam('tech', value);
    };

    const handleCourseChange = (event) => {
        const value = event.target.value;
        updateQueryParam('course', value);
    };

    const handleCountryChange = (event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        const currentCountries = searchParams.getAll('country');
        const newCountries = checked
            ? [...currentCountries, value]
            : currentCountries.filter((country) => country !== value);
        updateQueryParam('country', newCountries);
    };

    // Get current values from URL query parameters
    const getCurrentValue = (key) => searchParams.get(key) || '';
    const getCurrentCountries = () => searchParams.getAll('country');

    return (
        <>
            <h2>Query Push</h2>

            {/* Tech Options */}
            <div>
                <h3>Tech Options</h3>
                {techOptions.map((tech) => (
                    <label key={tech}>
                        <input
                            type="radio"
                            name="tech"
                            value={tech.toLowerCase()}
                            checked={getCurrentValue('tech') === tech.toLowerCase()}
                            onChange={handleTechChange}
                        />
                        {tech}
                    </label>
                ))}
            </div>

            {/* Course Options */}
            <div>
                <h3>Course Options</h3>
                {courseOptions.map((course) => (
                    <label key={course}>
                        <input
                            type="radio"
                            name="course"
                            value={course.toLowerCase()}
                            checked={getCurrentValue('course') === course.toLowerCase()}
                            onChange={handleCourseChange}
                        />
                        {course}
                    </label>
                ))}
            </div>

            {/* Country Checkboxes */}
            <div>
                <h3>Countries</h3>
                {countryOptions.map((country) => (
                    <label key={country}>
                        <input
                            type="checkbox"
                            name="country"
                            value={country}
                            checked={getCurrentCountries().includes(country)}
                            onChange={handleCountryChange}
                        />
                        {country}
                    </label>
                ))}
            </div>

            <p>Selected Tech: {getCurrentValue('tech')}</p>
            <p>Selected Course: {getCurrentValue('course')}</p>
            <p>Selected Countries: {getCurrentCountries().join(', ')}</p>
        </>
    );
};

export default QueryPush;
