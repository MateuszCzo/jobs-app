import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './nearbyJobs.style'
import { COLORS, SIZES } from '../../../constants';
import NearbyJobsCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hooks/useFetch';

const NearbyJobs = () => {
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch(
    'search', 
    {
      query: 'React Native',
      num_pages: 1,
    }
  );

  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Text style={ styles.headerTitle }>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={ styles.container }>
        {isLoading ? (
          <ActivityIndicator size="large" color={ COLORS.primary }/>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => {
            return (
              <NearbyJobsCard
                job={ job }
                key={ `nearby-job-${job?.job_id}` }
                handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
              />
            )
          })
        )}
      </View>
    </View>
  )
}

export default NearbyJobs
