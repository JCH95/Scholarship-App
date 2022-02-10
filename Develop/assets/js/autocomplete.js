
       google.maps.event.addDomListener(window, 'load', function () {
                        var autocomplete = new google.maps.places.Autocomplete(document.getElementById('address'));
                    
                        google.maps.event.addListener(autocomplete, 'place_changed', function () {
                            var place = autocomplete.getPlace();
                            var postalCode = '';
                            var city = '';
                            var state = '';
                          
                            var addressComponents = place.address_components;
                            if (addressComponents) {
                               
                                for (const component of addressComponents) {
                                    const componentType = component.types[0];
                                    switch (componentType) {
                                    case 'postal_code': {
                                        postalCode = component.long_name;
                                        break;
                                    }
                                    case 'administrative_area_level_1': {
                                        state = component.long_name;
                                        break;
                                    }
                                    case 'locality': {
                                        city = component.long_name;
                                        break;
                                    }
                                }
                                }
                            }
                            document.getElementById('address').value = place.name;
                            document.getElementById('postalCode').value = postalCode;
                            document.getElementById('city').value = city;
                            document.getElementById('state').value = state;
            
                        });
                    });
               