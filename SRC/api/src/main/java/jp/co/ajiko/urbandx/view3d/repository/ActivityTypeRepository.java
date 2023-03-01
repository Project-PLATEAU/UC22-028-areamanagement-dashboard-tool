package jp.co.ajiko.urbandx.view3d.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import jp.co.ajiko.urbandx.view3d.entity.ActivityType;

@Transactional
@Repository
public interface ActivityTypeRepository extends JpaRepository<ActivityType, Integer> {

}
