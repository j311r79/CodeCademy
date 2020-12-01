# names of hurricanes
names = ['Cuba I', 'San Felipe II Okeechobee', 'Bahamas', 'Cuba II', 'CubaBrownsville', 'Tampico', 'Labor Day', 'New England', 'Carol', 'Janet', 'Carla', 'Hattie', 'Beulah', 'Camille', 'Edith', 'Anita', 'David', 'Allen', 'Gilbert', 'Hugo', 'Andrew', 'Mitch', 'Isabel', 'Ivan', 'Emily', 'Katrina', 'Rita', 'Wilma', 'Dean', 'Felix', 'Matthew', 'Irma', 'Maria', 'Michael']

# months of hurricanes
months = ['October', 'September', 'September', 'November', 'August', 'September', 'September', 'September', 'September', 'September', 'September', 'October', 'September', 'August', 'September', 'September', 'August', 'August', 'September', 'September', 'August', 'October', 'September', 'September', 'July', 'August', 'September', 'October', 'August', 'September', 'October', 'September', 'September', 'October']

# years of hurricanes
years = [1924, 1928, 1932, 1932, 1933, 1933, 1935, 1938, 1953, 1955, 1961, 1961, 1967, 1969, 1971, 1977, 1979, 1980, 1988, 1989, 1992, 1998, 2003, 2004, 2005, 2005, 2005, 2005, 2007, 2007, 2016, 2017, 2017, 2018]

# maximum sustained winds (mph) of hurricanes
max_sustained_winds = [165, 160, 160, 175, 160, 160, 185, 160, 160, 175, 175, 160, 160, 175, 160, 175, 175, 190, 185, 160, 175, 180, 165, 165, 160, 175, 180, 185, 175, 175, 165, 180, 175, 160]

# areas affected by each hurricane
areas_affected = [['Central America', 'Mexico', 'Cuba', 'Florida', 'The Bahamas'], ['Lesser Antilles', 'The Bahamas', 'United States East Coast', 'Atlantic Canada'], ['The Bahamas', 'Northeastern United States'], ['Lesser Antilles', 'Jamaica', 'Cayman Islands', 'Cuba', 'The Bahamas', 'Bermuda'], ['The Bahamas', 'Cuba', 'Florida', 'Texas', 'Tamaulipas'], ['Jamaica', 'Yucatn Peninsula'], ['The Bahamas', 'Florida', 'Georgia', 'The Carolinas', 'Virginia'], ['Southeastern United States', 'Northeastern United States', 'Southwestern Quebec'], ['Bermuda', 'New England', 'Atlantic Canada'], ['Lesser Antilles', 'Central America'], ['Texas', 'Louisiana', 'Midwestern United States'], ['Central America'], ['The Caribbean', 'Mexico', 'Texas'], ['Cuba', 'United States Gulf Coast'], ['The Caribbean', 'Central America', 'Mexico', 'United States Gulf Coast'], ['Mexico'], ['The Caribbean', 'United States East coast'], ['The Caribbean', 'Yucatn Peninsula', 'Mexico', 'South Texas'], ['Jamaica', 'Venezuela', 'Central America', 'Hispaniola', 'Mexico'], ['The Caribbean', 'United States East Coast'], ['The Bahamas', 'Florida', 'United States Gulf Coast'], ['Central America', 'Yucatn Peninsula', 'South Florida'], ['Greater Antilles', 'Bahamas', 'Eastern United States', 'Ontario'], ['The Caribbean', 'Venezuela', 'United States Gulf Coast'], ['Windward Islands', 'Jamaica', 'Mexico', 'Texas'], ['Bahamas', 'United States Gulf Coast'], ['Cuba', 'United States Gulf Coast'], ['Greater Antilles', 'Central America', 'Florida'], ['The Caribbean', 'Central America'], ['Nicaragua', 'Honduras'], ['Antilles', 'Venezuela', 'Colombia', 'United States East Coast', 'Atlantic Canada'], ['Cape Verde', 'The Caribbean', 'British Virgin Islands', 'U.S. Virgin Islands', 'Cuba', 'Florida'], ['Lesser Antilles', 'Virgin Islands', 'Puerto Rico', 'Dominican Republic', 'Turks and Caicos Islands'], ['Central America', 'United States Gulf Coast (especially Florida Panhandle)']]

# damages (USD($)) of hurricanes
damages = ['Damages not recorded', '100M', 'Damages not recorded', '40M', '27.9M', '5M', 'Damages not recorded', '306M', '2M', '65.8M', '326M', '60.3M', '208M', '1.42B', '25.4M', 'Damages not recorded', '1.54B', '1.24B', '7.1B', '10B', '26.5B', '6.2B', '5.37B', '23.3B', '1.01B', '125B', '12B', '29.4B', '1.76B', '720M', '15.1B', '64.8B', '91.6B', '25.1B']

# deaths for each hurricane
deaths = [90,4000,16,3103,179,184,408,682,5,1023,43,319,688,259,37,11,2068,269,318,107,65,19325,51,124,17,1836,125,87,45,133,603,138,3057,74]

# write your update damages function here:
def updated_damages(damages):
  damages_updated = []
  for i in range(len(damages)):
    if damages[i][-1] == "M":
      damages_updated.append(1000000 * float(damages[i][:-1]))
    elif damages[i][-1] == "B":
      damages_updated.append(1000000000 * float(damages[i][:-1]))
    else:
      damages_updated.append(damages[i])
  return damages_updated

damages_updated = updated_damages(damages)

#test updated_damages function
#print(damages_updated)

# write your construct hurricane dictionary function here:
def construct_hurricane_dictionary(names, months, years, max_sustained_winds, areas_affected, damages, deaths):
  hurricane_dictionary = dict()
  for i in range(len(names)):
    hurricane_dictionary[names[i]] = {
      'Name': names[i],
      'Month': months[i],
      'Year': years[i],
      'Max sustained winds': max_sustained_winds[i],
      'Areas affected': areas_affected[i],
      'Damages': damages[i],
      'Deaths': deaths[i]
    }
  return hurricane_dictionary

hurricanes = construct_hurricane_dictionary(names, months, years, max_sustained_winds, areas_affected, damages_updated, deaths)

#test construct hurricane dictionary function
#print(hurricanes["Maria"])

# write your construct hurricane by year dictionary function here:
def convert_hurricanes_to_by_year(hurricanes):
  yearly_canes = dict()
  for cane in hurricanes:
    year = hurricanes[cane]['Year']
    data = hurricanes[cane]
    if year not in yearly_canes:
      yearly_canes[year] = [data]
    elif year in yearly_canes:
      yearly_canes[year].append(data)
  return yearly_canes

yearly_canes = convert_hurricanes_to_by_year(hurricanes)

#test convert to years function
#print(yearly_canes[1932])

# write your count affected areas function here:
def count_areas_affected(areas_affected):
  affected_areas_dict = dict()
  for area in areas_affected:
    for i in range(len(area)):
      if area[i] not in affected_areas_dict:
        affected_areas_dict[area[i]] = 1
      elif area[i] in affected_areas_dict:
        new_count = affected_areas_dict[area[i]] + 1
        affected_areas_dict[area[i]] = new_count
  return affected_areas_dict

affected_areas = (count_areas_affected(areas_affected))
#test affected areas function
#print(affected_areas)

# write your find most affected area function here:
def most_affected_area(affected_areas):
  area = dict()
  number = 0
  for areas in affected_areas:
    if number < affected_areas[areas]:
      number = affected_areas[areas]
      area[areas] = affected_areas[areas]
  return area

areas_most_affected = most_affected_area(affected_areas)

#test most affected areas function
#print(areas_most_affected)

# write your greatest number of deaths function here:
def greatest_deaths(hurricanes):
  most_deaths = dict()
  count = 0
  for cane in hurricanes:
    if count < hurricanes[cane]['Deaths']:
      count = hurricanes[cane]['Deaths']
      most_deaths[count] = cane
  new_dict = {most_deaths[count]: count}

  return new_dict

most_deaths = greatest_deaths(hurricanes)

#test greatest deaths function
#print(most_deaths)

# write your catgeorize by mortality function here:
def mortality_categorized(hurricanes):
  categorized_by_mortality = dict()
  for cane in hurricanes:
    category = 0
    if hurricanes[cane]["Deaths"] == 0:
      category = 0
    elif hurricanes[cane]["Deaths"] <= 100:
      category = 1
    elif hurricanes[cane]["Deaths"] <= 500:
      category = 2
    elif hurricanes[cane]["Deaths"] <= 1000:
      category = 3
    elif hurricanes[cane]["Deaths"] <= 10000:
      category = 4
    else:
      category = 5
    if category not in categorized_by_mortality:
      categorized_by_mortality[category] = [hurricanes[cane]]
    else:
      categorized_by_mortality[category].append(hurricanes[cane])
  return categorized_by_mortality

categorized_mortality = mortality_categorized(hurricanes)

#test categorize by mortality function
#print(categorized_mortality[3])

# write your greatest damage function here:

def greatest_damage(hurricanes):
  most_damage = dict()
  count = 0
  for cane in hurricanes:
    if hurricanes[cane]['Damages'] == "Damages not recorded":
      continue
    elif count < hurricanes[cane]['Damages']:
      count = hurricanes[cane]['Damages']
      most_damage[count] = cane
  new_dict2 = {most_damage[count]: count}

  return new_dict2

most_damage = greatest_damage(hurricanes)

#test greatest damage function
#print(most_damage)

# write your catgeorize by damage function here:
def categorize_by_damage(hurricanes):
  damage_categorized = dict()
  category = 0
  for cane in hurricanes:
    if hurricanes[cane]['Damages'] == "Damages not recorded":
      continue
    else:
      if hurricanes[cane]["Damages"] == 0:
        category = 0
      elif hurricanes[cane]["Damages"] <= 100000000:
        category = 1
      elif hurricanes[cane]["Damages"] <= 1000000000:
        category = 2
      elif hurricanes[cane]["Damages"] <= 10000000000:
        category = 3
      elif hurricanes[cane]["Damages"] <= 50000000000:
        category = 4
      else:
        category = 5
      if category not in damage_categorized:
        damage_categorized[category] = [hurricanes[cane]]
      else:
        damage_categorized[category].append(hurricanes[cane])

  return damage_categorized

damage_categorized = categorize_by_damage(hurricanes)

#test categorize by damage function
#print(damage_categorized[5])
